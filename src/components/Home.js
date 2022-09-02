import React from 'react'
import '../Home.css'
import Product from './Product'
import Footer from './Footer'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


function Home() { 
  const { products } = useSelector((state) => state.product)
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
          <Footer/>
      </Container>
  )
}

export default Home

const Container = styled.div `
  width: 100%;
  font-size: 0.8em;
`

const Content = styled.div `
  background-image: white;
  margin-top: -350px;
  padding: 10, 10px, 0 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: '1px solid #black'
`

const Banner = styled.div `
  background-image: url('https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg'); 
  min-height:600px;
  background-position: center;
  background-size: cover;

`
