import React from 'react'
import { Link } from 'react-router-dom'
import "./GigCard.scss"
import { AiFillStar, AiFillHeart } from "react-icons/ai"
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser"],
    queryFn: () =>
      newRequest
        .get(
          `/users/${item.userId}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <Link to="/gig/123" className="link">
      <div className="gig-card">
        <img src={item.img} alt="" />
        <div className="info">
          {isLoading ? (
              "loading"
            ) : error ? (
              "잘못된 접근 입니다"
            ) : (
              <div className="user">
                <img src={data.img || "/img/noavater.jpg"} alt="" />
                <span>{data.username}</span>
              </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <AiFillStar className="icons"/>
            <span>
              {!isNaN(item.totalStars / item.starNumber) && 
              Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="details">
          <AiFillHeart className="icons"/>
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GigCard