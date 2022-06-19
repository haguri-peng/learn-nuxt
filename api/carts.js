import { carts } from './index'

function createCartItem(item) {
  return carts.post('/', item)
}

function fetchCartItems() {
  return carts.get('/')
}

function updateQT(id, objQuantity) {
  return carts.patch(`/${id}`, objQuantity)
}

function deleteCartItem(id) {
  return carts.delete(`/${id}`)
}

export { createCartItem, fetchCartItems, updateQT, deleteCartItem }
