import {BrowserRouter, Route, Routes} from 'react-router'
import {useState} from 'react'
import CartContext from './context/CartContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])
  const addCartItem = product => {
    const existingItem = cartList.find(item => item.id === product.id)
    if (existingItem) {
      setCartList(prevCartList =>
        prevCartList.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    } else {
      setCartList(prevCarList => [...prevCarList, product])
    }
  }
  const deleteCartItem = id => {
    setCartList(prevCartList => prevCartList.filter(item => item.id !== id))
  }
  const updateCartItem = (id, quantity) => {
    if (quantity <= 0) {
      deleteCartItem(id)
    } else {
      setCartList(prevCartList =>
        prevCartList.map(item =>
          item.id === id ? {...item, quantity} : item,
        ),
      )
    }
  }
  const removeAllCartItems = () => {
    setCartList([])
  }
  return (
    <BrowserRouter>
      <CartContext value={{cartList, addCartItem, deleteCartItem, updateCartItem, removeAllCartItems}}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  )
}

export default App
