import React from 'react'
import { Link } from 'react-router-dom'
import "./GigCard.scss"
import { AiFillStar } from "react-icons/ai"

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="gig-card">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <AiFillStar className="icons"/>
            <span>{item.star}</span>
          </div>
        </div>
        <div className="detail"></div>
      </div>
    </Link>
  )
}

export default GigCard