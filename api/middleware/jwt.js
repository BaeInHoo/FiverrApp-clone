import jwt from 'jsonwebtoken';

export const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).send("인증되지 않았습니다");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if(!token) return res.status(403).send("무효한 토큰 입니다");
    req.userId = payload.indexOf;
    req.isSeller = payload.isSeller;
  })
}