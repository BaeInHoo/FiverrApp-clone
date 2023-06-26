import React from 'react'
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai';
import "./Review.scss";

const Review = () => {
  return (
    <div className="review">
      <div className="user">
        <img className="g-img" src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="info">
          <span>John Doe</span>
          <div className="country">
            <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>United States</span>
          </div>
        </div>
      </div>
      <div className="stars">
        <AiFillStar className="icons"/>
        <AiFillStar className="icons"/>
        <AiFillStar className="icons"/>
        <AiFillStar className="icons"/>
        <AiFillStar className="icons"/>
        <span>5</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsam quisquam animi aspernatur itaque voluptatum provident 
        voluptate rerum explicabo facilis accusantium et dolores 
        cupiditate iste eligendi, eos minus? Quas, omnis facere!
      </p>
      <div className="helpful">
        <span>Helpful?</span>
        <AiFillLike className="icons"/>
        <span>Yes</span>
        <AiFillDislike className="icons"/>
        <span>No</span>
      </div>
    </div>
  )
}

export default Review