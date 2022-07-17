import React from 'react'
import '../Home.css'
import { GrAmazon } from 'react-icons/gr'
import { BiSearchAlt } from 'react-icons/bi'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Avatar from 'react-avatar';
import { useSelector } from "react-redux";
import { success } from '../utils/alert'


function Header({ user }) {
  const navigate = useNavigate()
  const { totalCount } = useSelector((state) => state.cart)
  user = JSON.parse(user)
  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('count')
    success('You\'ve been logged out successfully!')
    navigate('/login')
    window.location.reload()
  }
  return (
    <>
    <Container>
        <HeaderLogo>
          <Link to='/'>
            <GrAmazon/>
          </Link>  
        </HeaderLogo>
        <HeaderOptionNavItems>
          <HeaderOption>
            <OptionLineOne>Hello, {user.name}</OptionLineOne>
            <OptionLineTwo onClick={logout}> Logout</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionNavItems>
        <HeaderSearchContainer>
          <HeaderSearchInput type='text'/>
          <BiSearchAlt/>
        </HeaderSearchContainer>
        <HeaderOptionNavItems>
          <HeaderOption>
            <Avatar style={{padding:0}} name={user.name} size="35" round={true}/>
          </HeaderOption>
        </HeaderOptionNavItems>
        <HeaderOptionCart>
          <Link to='/cart'>
          <BsFillCartPlusFill/>
          <CartCounter>{ isNaN(totalCount) ? 0 : totalCount }</CartCounter>
          </Link>
        </HeaderOptionCart>

    </Container>
    </>
  )
}

export default Header


const Container = styled.div`
  background-color: #0F1111;
  display: flex;
  align-items-center;
  justify-content: space-evenly;
  color: white;
  font-size:.8em;
`
const HeaderLogo = styled.div`
  
  display: flex;
  align-items: center;
  padding-left: 16px;
  cursor: pointer;
`
const HeaderSearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow:1;
  :focus {
    outine: none;
  }
`
const HeaderSearchInput = styled.input`
  display: flex;
  flex-grow:1;
  border-radius: 4px;
`
const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right:16px;
  cursor: pointer;
`
const HeaderOptionNavItems = styled.div`
  display: flex;
  align-items: center;

`
const HeaderOption = styled.div`
  padding:5px;
`

const OptionLineOne = styled.div`
  
`

const OptionLineTwo = styled.div`
  cursor: pointer;
  font-weight:bolder;
`

const CartCounter = styled.div`
  font-weight:700px;
  
`
