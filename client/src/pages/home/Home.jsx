import React from 'react'
import { BiCheck } from 'react-icons/bi'
import CatCard from '../../components/catCard/CatCard'
import Featured from '../../components/featured/Featured'
import ProjectCard from '../../components/projectCard/ProjectCard'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from '../../data'
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <BiCheck className='h-icons'/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <BiCheck className='h-icons'/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <BiCheck className='h-icons'/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <BiCheck className='h-icons'/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <BiCheck className='h-icons'/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <BiCheck className='h-icons'/>
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <BiCheck className='h-icons'/>
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <BiCheck className='h-icons'/>
              Get matched with the perfect talent by a customer success manager
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowScroll={4}>
        {projects.map(card => (
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home