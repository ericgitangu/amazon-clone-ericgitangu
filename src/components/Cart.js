import React, { useContext } from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import { AppContext } from '../App.js'

function Cart() {
  const {products, items} = useContext(AppContext)
  console.warn(`[Cart]: Products: ${JSON.stringify(products)} items: ${JSON.stringify(items)}`)
  return (
    <Container>
        <CartItems/>
        <CartTotal/>
    </Container>
  )
}

export default Cart

const Container = styled.div`
    display: flex;
    //TRouBLe
    padding: 14px 18px 0 18px;
    align-items: flex-start;
`