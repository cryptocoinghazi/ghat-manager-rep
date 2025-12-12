import jwt from 'jsonwebtoken';
import { getDB } from '../db.js';
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
    const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
    let user;
    if (useMySQL) {
      const found = await Users.findByPk(decoded.id);
      const json = found ? found.toJSON() : null;
      if (!json || json.is_active === 0) {
        return res.status(401).json({ error: 'User not found or inactive' });
      }
      user = { id: json.id, username: json.username, role: json.role, full_name: json.full_name };
    } else {
      const db = getDB();
      user = await db.get('SELECT id, username, role, full_name FROM users WHERE id = ? AND is_active = 1', [decoded.id]);
      if (!user) {
        return res.status(401).json({ error: 'User not found or inactive' });
      }
    }

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
