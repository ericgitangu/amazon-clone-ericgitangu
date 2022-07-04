import React from 'react'
import '../Home.css'
import { GrAmazon } from 'react-icons/gr'
import { ImLocation } from 'react-icons/im'
import { BiSearchAlt } from 'react-icons/bi'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <>
    <Container>
        <HeaderLogo>
          <Link to='/'>
            <GrAmazon/>
          </Link>  
        </HeaderLogo>
        <HeaderOptionAddress>
          <HeaderOption>
            <HeaderOptionLineOne>Hello</HeaderOptionLineOne>
            <HeaderOptionLineTwo>Select your address <ImLocation/> </HeaderOptionLineTwo>
            </HeaderOption>
        </HeaderOptionAddress>
        <HeaderSearchContainer>
          <HeaderSearchInput type='text'/>
          <BiSearchAlt/>
        </HeaderSearchContainer>
        <HeaderOptionNavItems>
          <HeaderOption>
            <OptionLineOne>Hello, Eric</OptionLineOne>
            <OptionLineTwo>Accounts & Lists</OptionLineTwo>
          </HeaderOption>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionNavItems>
        <HeaderOptionCart>
          <BsFillCartPlusFill/>
          <CartCounter>0</CartCounter>
        </HeaderOptionCart>

    </Container>
    </>
  )
}

export default Header


const Container = styled.div`
  height: 60px;
  background-color: #0F1111;
  display: flex;
  align-items-center;
  justify-content: space-between;
  color: white;
  padding: 5px;
`
const HeaderLogo = styled.div`
  
  display: flex;
  align-items: center;
  padding-left: 16px;
  cursor: pointer;
`
const HeaderOptionAddress = styled.span`
  cursor: pointer;  
`
const HeaderOptionLineOne = styled.span`
  font-weight: medium;
`
const HeaderOptionLineTwo = styled.div`
  font-weight: bolder;
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
  padding:16px;
  cursor: pointer;
`

const OptionLineOne = styled.div`
  cursor: pointer;
  
`

const OptionLineTwo = styled.div`
  font-weight:bolder;
`

const CartCounter = styled.div`
  font-weight:700px;
  
`
