import  React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import { getDocument, addDocument, updateDocumentQuantity } from '../utils/db'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { success } from '../utils/alert'
import { useSelector, useDispatch } from "react-redux";
import { quantity, getCartItemsAsync } from "../feature/cartSlice";

function Product({ product }) {  
    // eslint-disable-next-line
    const dispatch = useDispatch()
    const { totalCount } = useSelector((state) => state.cart)
    const [successMessage, setSuccessMessage] = useState('')
    const cart = () => {
        const doc = getDocument('cart-items', product.id)
        doc.then(res => {
            if(res) {
                updateDocumentQuantity('cart-items', res.id, res.quantity + 1)
            } else {
                const data = {
                    description: product?.description,
                    id: product?.id,
                    image: product?.image,
                    price: product?.price,
                    quantity: 1
                }
                addDocument('cart-items', product?.id, data)    
            }
            dispatch(getCartItemsAsync())
            dispatch(quantity(parseInt(totalCount) + 1))
            const msg = 'Item was added to your cart!'
            setSuccessMessage(msg)
            success(msg)
        }).catch(err => {
            console.error(err)
        })
    }
    return (
        <>
        <Container>
            <Title>
                {product?.description}
            </Title>
            <Price>
                {product?.price}
            </Price>
            <Rating>
                {Array(product?.rating).fill(0).map( (_, key) => <AiFillStar className="star" key={key}/>)}
            </Rating>
            <Image src={product?.image} alt="Product item"/>
            <ActionSection>
                <AddToCartButton onClick={cart}>
                    Add to Cart 
                </AddToCartButton>
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
            </ActionSection>
        </Container>
        </>
    )
    }

export default Product

const Container = styled.div`
    background-color: white;
    flex: 1;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 21%; 
`
const Title = styled.span``
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    min-height: 220px;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    flex: 1;
`

const ActionSection = styled.div`
    margin-top: 12px;
    flex-wrap: block;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    float: bottom;
    margin: 0 auto;

`