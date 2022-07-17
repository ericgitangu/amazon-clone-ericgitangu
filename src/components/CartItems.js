import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { useSelector } from "react-redux";
import CartTotal from './CartTotal'

function CartItems() {
    const { items, totalCount } = useSelector((state) => state.cart)
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <Items> {totalCount} items in your cart</Items>
            <hr />
            <ItemsContainer>
                {
                    items?.map( (item, key) => (
                        <CartItem key = { key } item = { item} />
                    ))
                }
            </ItemsContainer>
            <CartTotal />
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    background-color: white;
    margin: 0 auto;
`

const Title = styled.h1`
    text-align:center;
    margin-bottom: 8px;
`
const Items = styled.h2`
    text-align:center;
    margin-bottom: 8px;
`

const ItemsContainer = styled.div`
`
