import React, { useEffect } from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { quantity, total, getCartItemsAsync } from "../feature/cartSlice"
import { useSelector, useDispatch } from "react-redux";

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
            <hr />
            <ItemsContainer>
                {
                    items?.map( (item, key) => (
                        <CartItem key = { key } item = { item} />
                    ))
                }
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
