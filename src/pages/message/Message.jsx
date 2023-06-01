import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages'>MESSAGE</Link> > JOHN DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/8303663/pexels-photo-8303663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
              perferendis cupiditate. Aut magnam nisi velit, omnis aperiam alias
              necessitatibus. Rem animi adipisci voluptatibus fugit? Asperiores 
              minima perferendis eveniet exercitationem velit.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/8303663/pexels-photo-8303663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
              perferendis cupiditate. Aut magnam nisi velit, omnis aperiam alias
              necessitatibus. Rem animi adipisci voluptatibus fugit? Asperiores 
              minima perferendis eveniet exercitationem velit.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/8303663/pexels-photo-8303663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
              perferendis cupiditate. Aut magnam nisi velit, omnis aperiam alias
              necessitatibus. Rem animi adipisci voluptatibus fugit? Asperiores 
              minima perferendis eveniet exercitationem velit.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/8303663/pexels-photo-8303663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
              perferendis cupiditate. Aut magnam nisi velit, omnis aperiam alias
              necessitatibus. Rem animi adipisci voluptatibus fugit? Asperiores 
              minima perferendis eveniet exercitationem velit.
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/8303663/pexels-photo-8303663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
              perferendis cupiditate. Aut magnam nisi velit, omnis aperiam alias
              necessitatibus. Rem animi adipisci voluptatibus fugit? Asperiores 
              minima perferendis eveniet exercitationem velit.
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/8303663/pexels-photo-8303663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, 
              perferendis cupiditate. Aut magnam nisi velit, omnis aperiam alias
              necessitatibus. Rem animi adipisci voluptatibus fugit? Asperiores 
              minima perferendis eveniet exercitationem velit.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message