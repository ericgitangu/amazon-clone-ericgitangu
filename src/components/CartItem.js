import React from 'react'
import styled from 'styled-components'

const CartItem = () => {


    return (
        <Container>
            <ImageContainer>
                <img src='https://m.media-amazon.com/images/I/71VwicuVHiL._AC_UY218_.jpg'  alt=''/>
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>New IPad Pro (12-9 -inch, WiFi + Cellular, 512 GB) - Space Gray - 4th Generation.</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select>
                            <option value="5">Qty 5</option>
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer>
                        Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                $1499
            </CartItemPrice>
        </Container>
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
