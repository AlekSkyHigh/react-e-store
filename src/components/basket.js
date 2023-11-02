import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../contexts/cartContext'
import { Link, useNavigate } from 'react-router-dom';
import { UpIcon, DownIcon, TrashIcon } from './icons';

const Basket = () => {

  const [cartItems, setCartItems] = useState([]);

  const { getItems, clearBasket, increaseQuantity, decreaseQuantity, removeProduct } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems])

  const renderCart = () => {

    if (cartItems?.length > 0) {
      return cartItems.map((p) => (
        <React.Fragment key={p.id}>
          <div><Link to={`/products/${p.id}`}>{p.title}</Link></div>
          <h3>{p.quantity}
            <UpIcon width={16} onClick={() => setCartItems(increaseQuantity({ id: p.id }))} />
            <DownIcon width={16} onClick={() => setCartItems(decreaseQuantity({ id: p.id }))} />
            <TrashIcon width={16} onClick={() => setCartItems(removeProduct({ id: p.id }))} />
          </h3>
          <h3>&pound;{p.price}</h3>
        </React.Fragment>
      ))
    } else {
      return <div>The basket is currently empty</div>
    }

  }

  const renderTotal = () => {
    const cartItems = getItems();

    const total = cartItems.reduce((total, item) => (total + item.price * item.quantity), 0)

    return total;
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
      </div>

      <button className='basket-button' onClick={() => setCartItems(clearBasket())}>Clear</button>
      <h2 className='basket-total'>Total: &pound;{renderTotal()}</h2>

    </div>
  )
}

export default Basket;
