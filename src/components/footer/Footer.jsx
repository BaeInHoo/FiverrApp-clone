import React from 'react'
import "./Footer.scss"
import { 
  AiFillTwitterSquare, 
  AiFillFacebook, 
  AiFillLinkedin,
  AiFillInstagram
} from "react-icons/ai"
import { FaPinterestSquare } from "react-icons/fa"
import { MdOutlineGTranslate } from 'react-icons/md'
import { BsCoin, BsUniversalAccess } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverr</h2>
            <span>ⓒ Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <AiFillTwitterSquare className='f-icons'/>
              <AiFillFacebook className='f-icons'/>
              <AiFillLinkedin className='f-icons'/>
              <FaPinterestSquare className='f-icons'/>
              <AiFillInstagram className="f-icons"/>
            </div>
            <div className="link">
              <MdOutlineGTranslate className='f-icons'/>
              <span>English</span>
            </div>
            <div className="link">
              <BsCoin className="f-icons"/>
              <span>USD</span>
            </div>
            <BsUniversalAccess className='f-icons'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer