export interface EmailInfo {
  email: string;
  subject: string;
  message: string;
}

export async function sendMail(mailInfo: EmailInfo) {
  const response = await fetch('/api/mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mailInfo),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패했음!');
  }

  return data;
}
