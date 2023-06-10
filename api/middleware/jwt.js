import jwt from 'jsonwebtoken';
import createError from '../utils/createError';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if(!token) return next(createError(401, "인증되지 않았습니다"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if(!token) return next(createError(403, "유효하지 않습니다"));
    req.userId = payload.indexOf;
    req.isSeller = payload.isSeller;
    next()
  })
}