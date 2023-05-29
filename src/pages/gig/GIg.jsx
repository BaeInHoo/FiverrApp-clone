import React from 'react'
import "./Gig.scss";
import { AiFillStar, AiFillLike, AiFillDislike } from "react-icons/ai"
import Slide from '../../components/slide/Slide';

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img className='g-img' src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <AiFillStar className="icons"/>
              <AiFillStar className="icons"/>
              <AiFillStar className="icons"/>
              <AiFillStar className="icons"/>
              <AiFillStar className="icons"/>
              <span>5</span>
            </div>
          </div>
          <Slide className="slide" slidesToShow={1} arrowsScroll={1}>
            <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Slide>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnB character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            want in mind. All of the images I create are original and will be
            found nowhere eles. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <AiFillStar className="icons"/>
                  <AiFillStar className="icons"/>
                  <AiFillStar className="icons"/>
                  <AiFillStar className="icons"/>
                  <AiFillStar className="icons"/>
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <div className="desc">USA</div>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <div className="desc">Aug 2022</div>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <div className="desc">4 hours</div>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <div className="desc">1 day</div>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <div className="desc">English</div>
                </div>
              </div>
              <hr />
              <p>
                My name is Ciaran. I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that 
                means I know what to prompt the AI with to get a great and
                incredibly detailed result. 
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
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
            <hr />
            <div className="item">
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
            <hr />
            <div className="item">
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
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Gig