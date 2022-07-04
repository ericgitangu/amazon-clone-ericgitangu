import React from 'react'
import '../Home.css'
import Product from './Product'
import styled from 'styled-components'
import { useState, useEffect, createContext } from 'react'
import { db } from '../firebase.js'
import { collection, getDocs } from 'firebase/firestore/lite';

export const HomeContext = createContext({})
function Home() {
    const [products, setProduct] = useState([])
    const getProducts = async () => {
      const prodCol = collection(db, 'product');
      const prodSnaps = await getDocs(prodCol);
      const cityList = prodSnaps.docs.map(doc => doc.data());
      return cityList;
  }

  
  useEffect(() => {
    getProducts()
      .then(res => {
        setProduct(res)
      })
      .catch(err => {
        console.log(`Error connectin to DB: ${err}`)
      })
      // eslint-disable-next-line
  }, [])

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
