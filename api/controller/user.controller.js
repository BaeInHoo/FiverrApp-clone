import User from "../models/user.model.js"
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const token = req.cookies.accessToken;
  const user = await User.findById(req.params.id)

  if(!token) return res.status(401).send("인증되지 않았습니다");

  jwt.verify(token.process.env.JWT_KEY, async (err, payload) => {
    if (payload.id === user._id) {
      return res.status(403).send("당신의 정보가 삭제되었습니다");
    }

    await User.findByIdAndDelete(req.params.id);
  })
}