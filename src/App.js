import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
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
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
