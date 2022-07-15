import React, { useState } from 'react'
import styled from 'styled-components'
import { deleteCartItemsAsync, updateCartItemsAsync, quantity, total } from "../feature/cartSlice"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { success } from '../utils/alert'
import {  useDispatch, useSelector } from "react-redux"

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const {  totalAmount, totalQuantity } = useSelector((state) => state.cart)
    const [successMessage, setSuccessMessage] = useState('')
    const removeItem = (e) => {
        e.preventDefault()
        dispatch(deleteCartItemsAsync(item?.id)).then(() => {
            dispatch(total(totalAmount - (item?.quantity * item?.price)))
            dispatch(quantity(totalQuantity - item?.quantity))
        }).catch(err=>{
            console.error(`DB error dispatching delete document`)
        })
        const msg = 'Item successfully removed from your cart!'
        setSuccessMessage(msg)
        success(msg)
    }
    const updateQuantity = (qtty) => {
        dispatch(updateCartItemsAsync([item?.id, qtty])).then(() => {
            dispatch(total(totalAmount + (item?.quantity * item?.price)))
            dispatch(quantity(parseInt(totalQuantity) + item?.quantity))
        }).catch(err=> {
            console.error(`DB error dispatching updating document`)
        })
    }
    return (
        <>
        <Container>
            <ImageContainer>
                <img src={item?.image}  alt=''/>
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2> {item?.description}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select
                             value={item?.quantity}
                             onChange={(e) => updateQuantity(e.target.value)} >
                            {
                                Array(100).fill(0).map((_, key) =>    
                                    <option key={key} value={key + 1}>Qty {key + 1}</option>
                                )
                            }
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer onClick={removeItem}>
                        Delete
                        {successMessage && <ToastContainer
                            position="bottom-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />}
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                {item?.price}
            </CartItemPrice>
        </Container>
        </>
    )
}

export default CartItem


const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;
`

const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow: 1;
`

const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`

const CartItemQuantityContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2; 
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);

        :focus {
            outline: none;
        }
    }
`

const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`
