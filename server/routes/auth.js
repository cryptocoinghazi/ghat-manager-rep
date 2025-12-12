import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Users } from '../models/index.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'ghat-manager-secret-key-2024';

router.post('/login', async (req, res) => {
  console.log('Login attempt:', { 
    username: req.body.username,
    ip: req.ip,
    time: new Date().toISOString()
  });
  
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      console.log('Missing credentials');
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    const found = await Users.findOne({ where: { username, is_active: 1 } });
    const user = found ? found.toJSON() : null;
    
    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    console.log('User found:', { 
      id: user.id, 
      username: user.username, 
      role: user.role 
    });

    const passwordField = user.password_hash || user.password;
    const validPassword = await bcrypt.compare(password, passwordField);
    
    if (!validPassword) {
      console.log('Invalid password for user:', username);
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Login successful for:', user.username);
    
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        full_name: user.full_name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

router.post('/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        valid: false, 
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const found = await Users.findByPk(decoded.id);
    let user = found ? found.toJSON() : null;
    if (user && user.is_active === 0) user = null;
    if (user) user = { id: user.id, username: user.username, role: user.role, full_name: user.full_name };
    
    if (!user) {
      return res.status(401).json({ 
        valid: false, 
        message: 'User not found' 
      });
    }

    res.json({ 
      valid: true, 
      user 
    });
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ 
      valid: false, 
      message: 'Invalid or expired token' 
    });
  }
});

router.get('/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        valid: false, 
        message: 'No token provided' 
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const found = await Users.findByPk(decoded.id);
    let user = found ? found.toJSON() : null;
    if (user && user.is_active === 0) user = null;
    if (user) user = { id: user.id, username: user.username, role: user.role, full_name: user.full_name };
    
    if (!user) {
      return res.status(401).json({ 
        valid: false, 
        message: 'User not found' 
      });
    }

    res.json({ 
      valid: true, 
      user 
    });
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ 
      valid: false, 
      message: 'Invalid or expired token' 
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, password, role = 'user' } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    const existingUser = await Users.findOne({ where: { username } });
    
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'User already exists' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const created = await Users.create({ username, password_hash: hashedPassword, role });
    console.log('New user registered:', { id: created.id, username, role });
    const token = jwt.sign(
      { id: created.id, username, role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    return res.status(201).json({
      success: true,
      token,
      user: { id: created.id, username, role }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration' 
    });
  }
});

export default router;
