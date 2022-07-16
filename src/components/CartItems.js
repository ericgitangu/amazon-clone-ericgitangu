import React, { useEffect } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { quantity, total, getCartItemsAsync } from "../feature/cartSlice"
import { useSelector, useDispatch } from "react-redux";
import CartTotal from './CartTotal'

function CartItems() {
    const dispatch = useDispatch()
    const { items, totalCount } = useSelector((state) => state.cart)
    useEffect(() => {
        let qtty = 0
        let ttl = 0
        dispatch(getCartItemsAsync()).then(() => {
            items?.forEach( item => {
                qtty += item?.quantity
                ttl += item?.quantity * item?.price
            })
            dispatch(quantity(qtty))
            dispatch(total(ttl))
            // eslint-disable-next-line
        }).catch(err => {
            console.error(err)
        })
        // eslint-disable-next-line
    }, [totalCount])
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
