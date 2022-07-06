import  React, {useContext} from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import { getDocument, updateCollection, addDocument } from '../utils/db'
import { AppContext } from '../App.js'

function Product({ product }) {  
    const {products, items}= useContext(AppContext) 
    async function cart() {
        const doc = getDocument('cart-items', product.id)
        doc.then(res => {
            if(res) {
                console.warn(`Result: ${res}`)
                const data = {
                    quantity: res.quantity + 1
                }
                updateCollection('cart-items', res.id, data)
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
            </ActionSection>
        </Container>
        </>
    )
    }

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
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
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`