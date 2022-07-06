import React, { useContext } from 'react'
import '../Home.css'
import Product from './Product'
import styled from 'styled-components'
import { AppContext } from '../App.js'

function Home() { 
  const {products, items} = useContext(AppContext)
  // console.warn(`[Home]: Products: ${JSON.stringify(products)} items: ${JSON.stringify(items)}`)
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
`

const Banner = styled.div `
  background-image: url('https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg'); 
  min-height:600px;
  background-position: center;
  background-size: cover;

`
