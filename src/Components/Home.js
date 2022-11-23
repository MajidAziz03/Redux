import React from 'react'
import './Home.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Home() {
  return (
    <div>
      <div className='header'>
      <h1 className='heading'> Home Container </h1>
        <span>
          <ShoppingCartIcon className= 'cart-icon' />
      </span>
      </div>
      <div className="cart-container">
        <div className="left">
          <div className="wrapping">
            <div className='img-wrapper item'>
              <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="text-wrapper item">
              <span>
                Iphone 12 pro max
              </span>
              <span>
                Price : $123
              </span>
            </div>
            <div className="btn-wrapper item">
              <button> Add to Cart </button>
            </div>
          </div>
        </div>
        <div className="right">
          Sold items
        </div>
      </div>
    </div>
  )
}

export default Home