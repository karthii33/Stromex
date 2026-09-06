const express = require('express');
const prisma = require('../prismaClient');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.use(authenticateToken);

router.get('/', async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newTicket = await prisma.ticket.create({
      data: req.body
    });
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTicket = await prisma.ticket.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(updatedTicket);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.ticket.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete' });
  }
});

module.exports = router;
