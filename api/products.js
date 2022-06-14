import { products } from './index'

function fetchProducts() {
  return products.get('/')
}

function fetchProductsByKeyword(keyword) {
  // return instance.get(`/products?name_like=${keyword}`)
  return products.get('/', {
    params: {
      name_like: keyword,
    },
  })
}

function fetchProductById(id) {
  return products.get(`/${id}`)
}

export { fetchProducts, fetchProductsByKeyword, fetchProductById }
