import { sendEmail } from '@/service/email';
import { object, string } from 'yup';

const bodySchema = object({
  email: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '메일 전송에 실패했음' }), {
      status: 400,
    });
  }

  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      new Response(JSON.stringify({ message: '메일 전송에 실패함' }), {
        status: 500,
      });
    });
}
