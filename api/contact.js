import { Resend } from 'resend';

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
const REQUIRED_FIELDS = ['nombre', 'apellido', 'whatsapp'];
const OPTIONAL_FIELDS = ['mail', 'mensaje'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isString = (value) => typeof value === 'string';
const singleLine = (str) => str.replace(/[\r\n]+/g, ' ');

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

  const { RESEND_API_KEY, CONTACT_FROM, CONTACT_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_EMAIL) {
    return res.status(500).json({ error: 'Servicio de contacto no configurado' });
  }

  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Solicitud inválida' });
  }

  const hasInvalidType =
    REQUIRED_FIELDS.some((field) => !isString(body[field])) ||
    OPTIONAL_FIELDS.some((field) => body[field] != null && !isString(body[field])) ||
    !Array.isArray(body.selectedServices) ||
    !body.selectedServices.every(isString);
  if (hasInvalidType) {
    return res.status(400).json({ error: 'Solicitud inválida' });
  }

  const nombre = body.nombre.trim();
  const apellido = body.apellido.trim();
  const whatsapp = body.whatsapp.trim();
  const mail = body.mail?.trim() || null;
  const mensaje = body.mensaje?.trim() || null;
  const { selectedServices } = body;

  if (!nombre || !apellido || !whatsapp || !selectedServices.length) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const values = { nombre, apellido, whatsapp, mail, mensaje };
  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    if (values[field] && values[field].length > max) {
      return res.status(400).json({ error: `Campo ${field} excede el largo permitido` });
    }
  }

  if (mail && !EMAIL_PATTERN.test(mail)) {
    return res.status(400).json({ error: 'Mail no válido' });
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
    const resend = new Resend(RESEND_API_KEY);
    // Resend returns { data, error } instead of throwing on API errors
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_EMAIL,
      ...(mail && { replyTo: mail }),
      subject: singleLine(`Nuevo contacto: ${nombre} ${apellido}`),
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${safe.nombre} ${safe.apellido}</p>
        <p><strong>WhatsApp:</strong> ${safe.whatsapp}</p>
        ${safe.mail ? `<p><strong>Mail:</strong> ${safe.mail}</p>` : ''}
        <p><strong>Servicios:</strong> ${safe.services}</p>
        ${safe.mensaje ? `<p><strong>Mensaje:</strong> ${safe.mensaje}</p>` : ''}
      `,
    });

    if (error) {
      return res.status(502).json({ error: 'Error al enviar el mensaje' });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
