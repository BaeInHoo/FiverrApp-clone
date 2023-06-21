import User from "../models/user.model.js"
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "당신의 정보를 삭제완료했습니다"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("삭제되었습니다")

}

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user)

}