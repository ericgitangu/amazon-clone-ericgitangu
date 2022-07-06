import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import { getCollection } from './utils/db'

const productsCollection = 'product'
const cartItemsCollection = 'cart-items'
export const AppContext = createContext(null)


function App() {
  const [items, setCartItems] = useState([])
  const [products, setProducts] = useState([])

useEffect(() => {
  getCollection(cartItemsCollection)
    .then(res => {
      setCartItems(res)
    })
    .catch(err => {
      console.error(`Error connecting to the ${cartItemsCollection} DB: ${err}`)
    })

    getCollection(productsCollection)
    .then(res => {
      setProducts(res)
    })
    .catch(err => {
      console.error(`Error connecting to the ${productsCollection} DB: ${err}`)
    })
    // eslint-disable-next-line
}, [])

  return (
    <AppContext.Provider value={{ products, items }}>
    <Router>
      <Container>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/product' element={<Product/>} />
          </Routes>
      </Container>
    </Router>
    </AppContext.Provider>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
