import path from 'path';
import fs from 'fs';

export interface PostData {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getAllPosts(): Promise<PostData[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(data);
  return posts;
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}
