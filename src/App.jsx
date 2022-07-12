import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ApiContext } from "./Context/ApiContext";
import axios from "axios"
import Modal from "./components/Modal";
import ModalBg from "./components/ModalBg";

export default function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        res.data = (res.data.sort(() => Math.random() - 0.5))
        setItems(res.data)
        setFilteredItems(res.data)
      })
  }, [])

  return (
    <ApiContext.Provider 
      value={{
          items, 
          setItems, 
          filteredItems, 
          setFilteredItems, 
          modalIsOpen, 
          setModalIsOpen,
          selectedProduct, 
          setSelectedProduct
        }}>
      <div className="h-full w-100">
        {modalIsOpen && 
        <div className="flex justify-center items-center h-full w-full fixed z-10">
          <Modal />
          <ModalBg />
          </div>
        }
            
        <Navbar />
        <div className="grid grid-cols-5 m-6 gap-6">
          <Products />
        </div>
      </div>
    </ApiContext.Provider>
  )
}