import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

const MyGigs = () => {
  return (
    <div className="my-gigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'>Add</Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/8451166/pexels-photo-8451166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <AiFillDelete className='icons'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs