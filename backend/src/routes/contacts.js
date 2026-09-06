const express = require('express');
const prisma = require('../prismaClient');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// Get all contacts (public - used by CRM messages page with client-side token check)
router.get('/', async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { created_at: 'desc' }
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Get single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
});

// Create contact (public endpoint for website contact form submission)
router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        status: 'new'
      }
    });
    res.status(201).json({ message: 'Message received successfully', id: contact.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Update contact status (protected - only CRM authenticated users)
router.put('/:id', authenticateToken, async (req, res) => {
  const { status } = req.body;

  try {
    const contact = await prisma.contact.update({
      where: { id: parseInt(req.params.id) },
      data: { status }
    });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

module.exports = router;

