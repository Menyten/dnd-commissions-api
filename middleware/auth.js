import jwt from 'jsonwebtoken';
import Account from '../models/account';

export default async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      req.isAuth = false;
      return next();
    }
    return decoded;
  });
  const user = await Account.findById(decoded._id).select('-password');
  if (!user) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decoded._id;
  next();
};
