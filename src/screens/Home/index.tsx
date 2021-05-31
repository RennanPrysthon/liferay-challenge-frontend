import React, { useState } from 'react'

import api from '../../api'

import FloatingButton from '../../components/FloatingButton'
import Modal from '../../components/Modal'

import Form from '../Form'
import Table from '../Table'

import { Container } from './styles'

const Home: React.FC = () => {
  const [response, setResponse] = useState<ResponseProps | null>()
  const [products, setProducts] = useState<ProductType[]>([])

  function addProduct(product: ProductType) {
    setProducts([...products, product])
  }

  function remove(pIndex: number) {
    setProducts(products.filter((p, index) => index !== pIndex))
  }

  function handleRegisterButton() {
    if (products.length > 0) {
      registerProducts()
    }
  }

  async function registerProducts() {
    try {
      const { data } = await api.post<ResponseProps>('/product', products)
      setProducts([])
      setResponse(data);
    } catch (error) {
      alert('Error')
    }
  }

  return (
    <Container>
      <div>
        <Form submit={addProduct} />
      </div>
      <div>
        <header>
          <h1>Products</h1>
        </header>
        <Table rows={products} remove={remove} />
      </div>


      <FloatingButton onClick={handleRegisterButton}>+</FloatingButton>
      {
        !!response && 
        <Modal 
          response={response} 
          resetResponse={() => setResponse(null)}  
        /> 
      }
    </Container>
  )
}

export default Home