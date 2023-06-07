import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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

export const login = (req, res) => {
  
}

export const logout = (req, res) => {
  
}