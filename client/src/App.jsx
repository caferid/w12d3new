import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const baseUrl = 'http://localhost:5000/b'
  const [products, setProducts] = useState([])
  async function fetchData() {
    const response = await axios(baseUrl);
    console.log("data",response);
    setProducts(response.data)

  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
      <>
      <h1>my products</h1>
      <div className="">
        {products && products.map((product) => (
          <div className='box' key={product.id}>
            <div className="">
              <h2>{product.CUSTOMERNAME}</h2>
              <p>{product.CITY}</p>
              <q>{product.DISTRICT}</q>
              <q>{product.BIRTHDATE}</q>
              <q>{product.GENDER}</q>
              <q>{product.AGE}</q>
            </div>
          </div>))}
          </div>
      </>
      )
  }

      export default App
