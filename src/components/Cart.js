import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'

function Cart() {
  return (
    <Container>
        <CartItems />
    </Container>
  )
}

export default Cart

const Container = styled.div`
    width: auto;
    display: flex;
    //TRouBLe
    padding: 4px 8px 4px 8px;
    align-items: center;
`