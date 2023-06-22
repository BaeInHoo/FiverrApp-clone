import React from 'react'
import "./Gig.scss";
import { 
  AiFillStar, 
  AiFillLike, 
  AiFillDislike, 
  AiOutlineClockCircle 
} from "react-icons/ai";
import { GrPowerCycle } from "react-icons/gr"; 
import { BsCheckAll } from "react-icons/bs";
import Slider from 'infinite-react-carousel';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs/single/${id}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest
        .get(
          `/users/${data.userId}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  
  return (
    <div className="gig">
      {isLoading ? (
        "loading"
        ) : error ? (
          "잘못된 접근입니다"
        ) : (
        <div className="container">
        <div className="left">
          <span className="breadcrumbs">FIVERR {">"} GRAPHICS & DESIGN {">"}</span>
          <h1>{data.title}</h1>
          {isLoadingUser ? "loading" : errorUser ? "잘못된 접근 입니다" :<div className="user">
            <img className='g-img' src="https://images.pexels.com/photos/16450166/pexels-photo-16450166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>John Doe</span>
            {/* 별 개수 만큼 별 표시 */}
            {!isNaN(data.totalStars / data.starNumber) && (
              <div className="stars">
                {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
                  <AiFillStar className="icons" key={i}/>
                ))}
                <span>
                  {Math.round(data.totalStars / data.starNumber)}
                </span>
              </div>
            )}
          </div>}
          <Slider className="slide" slidesToShow={1} arrowsScroll={1}>
            {data.images.map((img) => (
              <img key={img} src={img} alt=''/>
            ))}
          </Slider>
          <h2>About This Gig</h2>
          <p>{data.desc}</p>
          {isLoadingUser ? "loading" : errorUser ? "잘못된 접근 입니다" : <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={dataUser.img || "/img/noavatar.jpg"} alt="" />
              <div className="info">
                <span>{dataUser.username}</span>
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
                  <div className="desc">{dataUser.country}</div>
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
              <p>{dataUser.desc}</p>
            </div>
          </div>
          }
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
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h3>$ {data.price}</h3>
          </div>
          <p>{data.shortDesc}</p>
          <div className="details">
            <div className="item">
              <AiOutlineClockCircle className='icons'/>
              <span>{data.deliveryDate} days Delivery</span>
            </div>
            <div className="item">
              <GrPowerCycle className='icons'/>
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
            {data.features.map((feature) => (
              <div className="item" key={feature}>
                <BsCheckAll className='icons'/>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>)}
    </div>
  )
}

export default Gig