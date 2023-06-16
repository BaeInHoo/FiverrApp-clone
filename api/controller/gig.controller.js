import gigModel from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if(!req.isSeller) return next(createError(403, "판매자들만 만들 수 있습니다."));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (error) {
    next(error);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId !== req.userId)
      return next(createError(403, "당신의 것은 오직 당신만 삭제할 수 있습니다."));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("삭제되었습니다.");
  } catch (error) {
    next(error);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if(!gig) next(createError(404, "찾을 수 없습니다"));
  } catch (error) {
    next(error);
  }
};

export const getGigs = async (req, res, next) => {
  try {
    const gigs = await Gig.find();
  } catch(error) {
    next(error);
  }
};