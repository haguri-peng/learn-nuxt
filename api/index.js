import axios from 'axios'

// axios 초기화
function createInstance(url) {
  return axios.create({
    baseURL: `http://localhost:3000/${url}`,
  })
}

export const products = createInstance('products')
export const carts = createInstance('carts')
