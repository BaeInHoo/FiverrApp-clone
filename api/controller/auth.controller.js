import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

// 유저 생성하기
export const register = async (req, res, next) => {
  try {
    // 비밀번호 암호화하기
    const hash = bcrypt.hashSync(req.body.password, 5)
    // 새로운 유저 정보 받기
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    // 정상 작동 시 create return
    res.status(201).send("유저가 생성되었습니다");
  } catch (error) {
    next(error);
  }
}

export const login = async (req, res, next) => {
  try {
    // 유저 정보찾기
    const user = await User.findOne({username: req.body.username});

    // 유저 없을 시 에러 표출
    if (!user) return next(createError(404, "User Not Found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "아이디와 패스워드가 틀렸습니다"));

    const token = jwt.sign({
      id: user._id,
      isSeller: user.isSeller,
    }, process.env.JWT_KEY);

    const {password, ...info} = user._doc
    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).send(user)

  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    sameSite: "none",
    secure: true,
  }).status(200).send("로그아웃 되었습니다");
};