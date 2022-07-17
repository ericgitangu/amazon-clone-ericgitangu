import './App.css';
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItemsAsync } from './feature/cartSlice'
import { getProductItemsAsync } from './feature/productSlice'

function App() {
  const dispatch = useDispatch()
  const { totalCount } = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(getCartItemsAsync()).then(() => {
      console.warn(`Fetching and updating cart state`)
    }).catch(err => {
      console.log(`Header, error getting cart state: ${err}`)
    })
    dispatch(getProductItemsAsync()).then(() => {
      console.warn(`Fetching and updating products state`)
    }).catch(err => {
      console.log(`Header, error getting cart state: ${err}`)
    })
    //eslint-disable-next-line
  }, [totalCount])
  const { user } = useSelector((state) => state.user)
  return (
    <Router>
      <Container>
        {user && <Header user={user} />}
          <Routes>
            <Route path='/' element={user ? <Home /> : <Login />}/>
            <Route path='/cart' element={user? <Cart /> : <Login />} />
            <Route path='/login' element={ <Login />} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div `
  background-color: #EAEDED;
`
