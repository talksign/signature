import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { email, code } = req.body;

  try {
    await resend.emails.send({
      from: 'TalkSign Verification <onboarding@resend.dev>', // Change to your verified domain later
      to: email,
      subject: 'TalkSign Signature Code',
      html: `Your verification code is: <strong>${code}</strong>`
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}