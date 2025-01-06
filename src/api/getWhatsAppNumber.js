export default function handler(req, res) {
    res.status(200).json({ number: process.env.WHATSAPP_NUMBER });
  }
  