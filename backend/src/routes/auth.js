const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET || 'secret-key',
      { expiresIn: '8h' }
    );
    res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Protected: only authenticated users can create new accounts
router.post('/register', authenticateToken, async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'Sales'
      }
    });
    res.json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists or invalid data' });
  }
});

module.exports = router;
