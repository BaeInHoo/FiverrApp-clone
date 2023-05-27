import React, { useState } from 'react'
import "./Gigs.scss"
import { AiFillCaretDown } from "react-icons/ai"

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sort-by'>SortBy</span>
            <span className='sort-type'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <AiFillCaretDown className="icons" onClick={()=>setOpen(!open)}/>
            {open && (
              <div className="right-menu">
                <span onClick={()=>reSort("createdAt")}>Newest</span>
                <span onClick={()=>reSort("sales")}>Best Selling</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gigs