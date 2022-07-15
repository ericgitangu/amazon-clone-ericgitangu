import React, { useEffect, useState } from 'react'
import '../Home.css'
import Product from './Product'
import styled from 'styled-components'
import { getCollection } from '../utils/db'
const productsCollection = 'product'

function Home() { 
  const [products, setProducts] = useState([])
  useEffect(() => {
    getCollection(productsCollection)
    .then(res => {
      setProducts(res)
    })
    .catch(err => {
        console.error(`Error connecting to the ${productsCollection} DB: ${err}`)
    })
  },[])
  return (
      <Container>
          <Banner/>
          <Content>  
            {
              products?.map( (product, key) => (
                <Product key={key} product={product} />
              ))
            }
          </Content>
      </Container>
  )
}

export default Home

const Container = styled.div `
  max-width: 95%;
  margin: 0 auto;
`

const Content = styled.div `
  background-image: white;
  margin-top: -350px;
  padding: 0, 10px, 0 10px;
  display: flex;
  flex-wrap: wrap;
  
`

const Banner = styled.div `
  background-image: url('https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg'); 
  min-height:600px;
  background-position: center;
  background-size: cover;

`
