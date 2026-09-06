const express = require('express');
const prisma = require('../prismaClient');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.use(authenticateToken);

router.get('/', async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCustomer = await prisma.customer.create({
      data: req.body
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await prisma.customer.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete' });
  }
});

module.exports = router;
