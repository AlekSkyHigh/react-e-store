import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

  const navigate = useNavigate();

  const confirmOrder = (ev) => {
    navigate("/orderconfirmation")
  }


  return (
    <div className='checkout-container'>

      <h2 className='checkout-title'>Shopping Checkout</h2>

      <div className='checkout-header'>
        <h4>Your Details</h4>
      </div>

      <hr className='checkout-headerline'></hr>

      <div className='checkout-table'>
        <label className='checkout-form-label'>Name</label>
        <input type='text' name='name'></input>
        <label className='checkout-form-label'>Email</label>
        <input type='text' name='email'></input>
      </div>

      <div className='checkout-header'>
        <h4>Adress Details</h4>
      </div>

      <hr className='checkout-headerline'></hr>

      <div className='checkout-table'>
        <label className='checkout-form-label'>Copy to Shipping</label>
        <input className='checkout-form-checkbox' type='checkbox'></input>
        <label className='checkout-form-label'>Billing Adress</label>
        <div className='checkout-address'>
          <input type='text' name='billing-address1'></input>
          <input type='text' name='billing-address2'></input>
          <input type='text' name='billing-city'></input>
        </div>
        <label className='checkout-form-label'>Shipping Adress</label>
        <div className='checkout-address'>
          <input type='text' name='shipping-address1'></input>
          <input type='text' name='shipping-address2'></input>
          <input type='text' name='shipping-city'></input>
        </div>
      </div>

      <button className='cancel-button' onClick={() => navigate("/basket")}>Cancel</button>
      <button className='checkout-button' onClick={confirmOrder}>Confirm Order</button>

    </div>
  )
}

export default Checkout