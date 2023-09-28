import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { useState } from 'react';
function App() {

  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState(
    {
      id: 1,
      name: '',
      price: '',
      image: null
    }
  )

  const handleOnChange = (e) => {
    const { name, value, type } = e.target

    if (type === 'file') {
      const file = e.target.files[0]
      setNewProduct({ ...newProduct, [name]: file })
    }
    else {
      setNewProduct({ ...newProduct, [name]: value })
    }
  }


  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      const product = { ...newProduct }

      setProducts([...products, product])

      setNewProduct({ id: newProduct.id + 1, name: '', price: '', image: null })
    }
  }


  const handleDeleteProduct = (id) => {
    const indexToDelete = products.findIndex((product) => product.id === id);
  
    if (indexToDelete !== -1) {
      const updatedProducts = [...products];
      updatedProducts.splice(indexToDelete, 1);
      setProducts(updatedProducts);
    }
  };
  

  return (
    <div className="App" style={{width: '300px'}}>

      <div>
        <label>Name</label>
        <input name='name' value={newProduct.name} onChange={handleOnChange} class='form-control' />
        <label>Price</label>
        <input name='price' value={newProduct.price} onChange={handleOnChange} class='form-control' />
        <label>Image</label>
        <input type='file' class='form-control' name='image' onChange={handleOnChange}></input>
        <button style={{width: '200px', margin: '10px'}} class='btn btn-dark' onClick={handleAddProduct}>Add</button>
      </div>


      <div class='card-container' style={{justifyItems: 'right'}}>
        {products.map((product) => (
          <div class="card" style={{ width: "18rem" }} key={product.id}>
          <Image class="card-img-top" src={URL.createObjectURL(product.image)} alt={product.name} />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">Id: {product.id}</p>
            <p class="card-text">Price: {product.price}</p>
            <button class='btn btn-dark' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </div>
        </div>
        ))}
        
      </div>

    </div>
  );
}

export default App;

const Image = styled.img({
  width: '18rem',
  height: '300px'
})

