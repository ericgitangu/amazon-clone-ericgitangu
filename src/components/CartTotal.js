import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { useSelector } from "react-redux";

function CartTotal() {
    const { totalAmount } = useSelector((state) => state.cart)
    return (
        <Container>
            <Subtotal>Subtotal:  
                <NumberFormat value={totalAmount} displayType='text' thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    padding: 20px;
    background-color: white;
    text-align: center;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    // vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background:  #ddb347;
    }
`
