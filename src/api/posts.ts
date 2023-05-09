import { readFile } from 'fs/promises';
import path from 'path';

export interface PostData {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export interface Post extends PostData {
  content: string;
  prev: PostData | null;
  next: PostData | null;
}

export async function getAllPosts(): Promise<PostData[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<PostData[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPost(fileName: string): Promise<Post> {
  const markdownPath = path.join(process.cwd(), 'data', `posts/${fileName}.md`);
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(markdownPath, 'utf-8');
  return { ...post, content, prev, next };
}
