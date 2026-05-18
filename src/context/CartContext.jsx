import React from 'react'
const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  updateCartItem: () => {},
  removeAllCartItems: () => {},
})
export default CartContext
