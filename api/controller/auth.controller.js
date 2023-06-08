import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5)
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("유저가 생성되었습니다");
  } catch (error) {
    res.status(500).send("잘못된 정보 입니다")
  }
}

export const login = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (!user) return res.status(404).send("유저가 없습니다");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("비밀번호나 아이디가 틀렸습니다");

    const token = jwt.sign({
      id: user._id,
      isSeller: user.isSeller,
    });

    const {password, ...info} = user._doc
    res.status(200).send(user)

  } catch (error) {
    res.status(500).send("잘못된 정보 입니다")
  }
}

export const logout = (req, res) => {
  
}