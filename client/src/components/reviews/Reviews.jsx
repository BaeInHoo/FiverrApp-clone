import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai';
import newRequest from '../../utils/newRequest';
import Review from '../review/Review';
import "./Reviews.scss";

const Reviews = ({gigId}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest
        .get(
          `/reviews/${gigId}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <Review />
    </div>
  )
}

export default Reviews