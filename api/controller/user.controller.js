import User from "../models/user.model.js"

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return res.status(403).send("당신의 정보를 삭제완료했습니다");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("삭제되었습니다")

}