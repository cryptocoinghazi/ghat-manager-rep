import jwt from 'jsonwebtoken';
import { Users } from '../models/index.js';

const JWT_SECRET = process.env.JWT_SECRET || 'ghat-manager-secret-key-2024';

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const found = await Users.findByPk(decoded.id);
    const json = found ? found.toJSON() : null;
    if (!json || json.is_active === 0) {
      return res.status(401).json({ error: 'User not found or inactive' });
    }
    const user = { id: json.id, username: json.username, role: json.role, full_name: json.full_name };

    if (!user) {
      return res.status(401).json({ error: 'User not found or inactive' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth error:', error.message);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

export const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};
