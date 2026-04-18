import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, apellido, whatsapp, mail, mensaje, selectedServices } = req.body;

  if (!nombre || !apellido || !whatsapp || !selectedServices?.length) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo contacto: ${nombre} ${apellido}`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        ${mail ? `<p><strong>Mail:</strong> ${mail}</p>` : ''}
        <p><strong>Servicios:</strong> ${selectedServices.join(', ')}</p>
        ${mensaje ? `<p><strong>Mensaje:</strong> ${mensaje}</p>` : ''}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
