import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Context } from "./Context/Context";
import axios from "axios"
import Modal from "./components/Modal";
import ModalBg from "./components/ModalBg";
import Cart from "./components/Cart";

export default function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    setCartCount(cartItems.length)
  }, [cartItems])
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        res.data = (res.data.sort(() => Math.random() - 0.5))
        setItems(res.data)
        setFilteredItems(res.data)
      })
  }, [])

  return (
    <Context.Provider 
      value={{
          items, 
          setItems, 
          filteredItems, 
          setFilteredItems, 
          modalIsOpen, 
          setModalIsOpen,
          selectedProduct, 
          setSelectedProduct,
          cartItems,
          setCartItems,
          cartIsOpen, 
          setCartIsOpen,
          cartCount
      }}>
        <div className="h-full w-100">
        {cartIsOpen && 
          <div>
            <Cart />
            <ModalBg />
          </div>
        }
        {modalIsOpen && 
        <div className="flex justify-center items-center h-full w-full fixed z-10">
          <Modal />
          <ModalBg />
          </div>
        }
            
        <Navbar />
        <div className="grid grid-cols-5 m-6 gap-6 sm:grid-cols-3">
          <Products />
        </div>
      </div>
    </Context.Provider>
  )
}