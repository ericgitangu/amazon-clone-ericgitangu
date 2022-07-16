import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux"

function App() {
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
