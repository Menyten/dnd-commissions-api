import jwt from 'jsonwebtoken';
import getToken from '../helpers/getToken';
import Account from '../models/account';

export default async (req, res, next) => {
  const token = getToken(req.get('cookie'));
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error) {
      req.isAuth = false;
      return next();
    }
  }
  const user = await Account.findById(decoded._id).select('-password');
  if (!user) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decoded._id;
  req.token = token;
  next();
};
