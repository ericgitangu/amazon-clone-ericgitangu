import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems(products, cartItems) {
    const docs = getCollection('cart-items')
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                <CartItem products={products} cartItems={cartItems} />
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex: 0.8;
    padding: 20px;
    margin-right: 18px;
    background-color: white;
`

const Title = styled.h1`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div`
`
