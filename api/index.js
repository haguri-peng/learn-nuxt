import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProducts() {
  return instance.get('/products')
}

function fetchProductsByKeyword(keyword) {
  // return instance.get(`/products?name_like=${keyword}`)
  return instance.get('/products', {
    params: {
      name_like: keyword,
    },
  })
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

export { fetchProducts, fetchProductsByKeyword, fetchProductById }
