import React from 'react'

const Basket = () => {
  return (
    <div className='basket-container'>
      <h2 className='basket-title'>Shopping Basket</h2>
      <button className='basket-button'>Checkout</button>
      <div className='basket-table'>

        <div className='basket-header'>
          <h4>Item</h4>
          <h3 className='basket-qty'>Quantity</h3>
          <h3 className='basket-price'>Price</h3>
        </div>

        <hr className='basket-headerline'></hr>

        <div className='basket-header'>
          Cart Items
        </div>

        <hr className='basket-headerline'></hr>

        <button className='basket-button'>Clear</button>
        <h2 className='basket-total'>Total: $0</h2>

      </div>

    </div>
  )
}

export default Basket;
