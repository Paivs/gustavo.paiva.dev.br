import nodemailer from "nodemailer";

export async function POST(req) {
  const { nome, mensagem } = await req.json();

  // Configure seu transporte SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Ex: smtp.gmail.com ou smtp.titan.email
    port: 465,
    secure: true, // true para 465, false para outros
    auth: {
      user: "suporte@gift-u.app",
      pass: "ATEnas#@2024",
    },
  });

  // Envie o email
  await transporter.sendMail({
    from: '"Site" <suporte@gift-u.app>', // de quem vem
    to: "gustavo.paiva.gp1@gmail.com",    // pra onde vai (você)
    subject: "Novo contato do site",
    text: `Nome: ${nome}\n\nMensagem:\n${mensagem}`,
  });

  return new Response(JSON.stringify({ success: true }));
}
