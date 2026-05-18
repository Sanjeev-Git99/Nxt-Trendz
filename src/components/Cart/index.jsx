import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import {use, useState} from 'react'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)
  const value = use(CartContext)
  const {cartList, removeAllCartItems} = value
  const showEmptyCartView = cartList.length === 0
  
  const totalAmount = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  
  const handleRemoveAll = () => {
    removeAllCartItems()
  }
  
  const handleCheckout = () => {
    removeAllCartItems()
    setIsOrderPlaced(true)
  }
  
  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-content-container">
          {isOrderPlaced ? (
            <div className="order-success-container">
              <div className="order-success-card">
                <h2 className="success-message">Your order successfully placed</h2>
              </div>
            </div>
          ) : (
            <>
              <div className="cart-heading-container">
                <h1 className="cart-heading">My Cart</h1>
                {!showEmptyCartView && (
                  <button 
                    className="remove-all-button" 
                    type="button"
                    onClick={handleRemoveAll}
                  >
                    Remove all
                  </button>
                )}
              </div>
              {showEmptyCartView ? (
                <EmptyCartView />
              ) : (
                <div className="cart-with-summary-container">
                  <CartListView />
                  <div className="cart-summary-container">
                    <div className="cart-summary-header">
                      <span className="cart-summary-label">Order Total:</span>
                      <span className="cart-summary-amount">Rs {totalAmount}/-</span>
                    </div>
                    <p className="cart-summary-items">
                      {cartList.length} item{cartList.length !== 1 ? 's' : ''} in cart
                    </p>
                    <button className="checkout-button" type="button" onClick={handleCheckout}>
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
