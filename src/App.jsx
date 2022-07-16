import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Context } from "./Context/Context";
import axios from "axios"
import Modal from "./components/Modal";
import ModalBg from "./components/ModalBg";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [totalPriceCart, setTotalPriceCart] = useState(0)

  function addProduct(item) {
    const updatedCart = [...cartItems]
    const productExist = updatedCart.find(product => product.id === item.id)
    const currentAmount = productExist ? productExist.amount : 0
    const amount = currentAmount + 1
    if (productExist) {
      productExist.amount = amount
    } else {
      const newProduct = {
        ...item,
        amount: 1
      }
      updatedCart.push(newProduct)
    }
    setCartItems(updatedCart)
  }

  function sumTotalPrice() {
    const totalPrice = cartItems.reduce((totalPrice, item) => {
      return totalPrice + item.price * item.amount
    }, 0)
    setTotalPriceCart(totalPrice)
  }

  useEffect(() => {
    sumTotalPrice()
  }, [cartItems])

  function updateProduct(id, operationType) {
    const updatedCart = [...cartItems]
    const productExist = updatedCart.find(product => product.id === id)
    if (operationType === "-") {
      if (productExist.amount <= 1) {
        return
      }
      productExist.amount -= 1
    } else if (operationType === "+") {
      productExist.amount += 1
    }
    setCartItems(updatedCart)
  }

  function removeProduct(id) {
    const updatedCart = [...cartItems]
    const productIndex = updatedCart.findIndex(item => id === item.id)
    if (productIndex >= 0) {
      updatedCart.splice(productIndex, 1)
      setCartItems(updatedCart)
    }
  }

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
        cartCount,
        addProduct,
        removeProduct,
        updateProduct,
        totalPriceCart,
        setTotalPriceCart,
        sumTotalPrice
      }}>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="h-full">
          {cartIsOpen &&
            <div>
              <Cart cartIsOpen={cartIsOpen} />
              <ModalBg />
            </div>
          }

          {modalIsOpen &&
            <div className="flex justify-center items-center h-full w-full fixed">
              <Modal />
              <ModalBg />
            </div>
          }

          <div className="top-0 sticky">
            <Navbar />
          </div>

          <div className="m-6 gap-6 grid grid-cols-5 products h-full">
            <Products />
          </div>

        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Context.Provider>
  )
}