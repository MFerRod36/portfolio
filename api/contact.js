import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_SERVICES = new Set([
  'Desarrollo Web',
  'Marketing Digital',
  'Branding & CM',
  'Otro',
  'Web Development',
  'Digital Marketing',
  'Other',
]);

const MAX_LENGTHS = { nombre: 100, apellido: 100, whatsapp: 30, mail: 254, mensaje: 2000 };

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'https://fernanda-rodriguez.dev');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { nombre, apellido, whatsapp, mail, mensaje, selectedServices } = req.body;

  if (!nombre || !apellido || !whatsapp || !selectedServices?.length) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = req.body[field];
    if (value && String(value).length > max) {
      return res.status(400).json({ error: `Campo ${field} excede el largo permitido` });
    }
  }

  const invalidService = selectedServices.find((s) => !ALLOWED_SERVICES.has(s));
  if (invalidService) {
    return res.status(400).json({ error: 'Servicio no válido' });
  }

  const safe = {
    nombre: escapeHtml(nombre),
    apellido: escapeHtml(apellido),
    whatsapp: escapeHtml(whatsapp),
    mail: mail ? escapeHtml(mail) : null,
    mensaje: mensaje ? escapeHtml(mensaje) : null,
    services: selectedServices.map(escapeHtml).join(', '),
  };

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo contacto: ${safe.nombre} ${safe.apellido}`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${safe.nombre} ${safe.apellido}</p>
        <p><strong>WhatsApp:</strong> ${safe.whatsapp}</p>
        ${safe.mail ? `<p><strong>Mail:</strong> ${safe.mail}</p>` : ''}
        <p><strong>Servicios:</strong> ${safe.services}</p>
        ${safe.mensaje ? `<p><strong>Mensaje:</strong> ${safe.mensaje}</p>` : ''}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
