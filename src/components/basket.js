import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import { Link, useNavigate } from 'react-router-dom';
import { UpIcon, DownIcon, TrashIcon } from './icons';

const Basket = () => {
  const { getItems, clearBasket, increaseQuantity, decreaseQuantity, removeProduct } = useContext(CartContext);
  const navigate = useNavigate();

  const renderCart = () => {

    const cartItems = getItems();

    if (cartItems.length > 0) {
      return cartItems.map((p) => (
        <React.Fragment>
          <div><Link to={`/products/${p.id}`}>{p.title}</Link></div>
          <h3>{p.quantity}
            <UpIcon width={16} onClick={() => increaseQuantity({ id: p.id })} />
            <DownIcon width={16} onClick={() => decreaseQuantity({ id: p.id })} />
            <TrashIcon width={16} onClick={() => removeProduct({ id: p.id })} />
          </h3>
          <h3>&pound;{p.price}</h3>
        </React.Fragment>
      ))
    } else {
      return <div>The basket is currently empty</div>
    }

  }

  return (
    <div className='basket-container'>
      <h2 className='basket-title'>Shopping Basket</h2>
      <button className='basket-button' onClick={() => navigate('/checkout')}>Checkout</button>
      <div className='basket-table'>

        <div className='basket-header'>
          <h4>Item</h4>
          <h3 className='basket-qty'>Quantity</h3>
          <h3 className='basket-price'>Price</h3>
        </div>

        <hr className='basket-headerline'></hr>

        <div className='basket-header'>
          {renderCart()}
        </div>

        <hr className='basket-headerline'></hr>

        <button className='basket-button' onClick={() => clearBasket()}>Clear</button>
        <h2 className='basket-total'>Total: $0</h2>

      </div>

    </div>
  )
}

export default Basket;
