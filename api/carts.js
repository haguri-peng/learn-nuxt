import { carts } from './index'

function createCartItem(item) {
  return carts.post('/', item)
}

function fetchCartItems() {
  return carts.get('/')
}

export { createCartItem, fetchCartItems }
