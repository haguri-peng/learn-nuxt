import _ from 'lodash'
import { fetchCartItems } from '@/api/carts'

export const state = () => ({
  cartItems: [],
})

export const getters = {
  getCartItems(state) {
    return state.cartItems
  },
}

export const mutations = {
  addCartItem(state, item) {
    state.cartItems.push(item)
  },
  removeCartItem(state, id) {
    const removedItem = _.remove(state.cartItems, (item) => item.id === id)
    console.log(removedItem)
    if (!removedItem.length) {
      alert('삭제되지 않았습니다.')
    }
  },
  setCartItems(state, data) {
    state.cartItems = data
  },
}

export const actions = {
  getCartItems(context) {
    fetchCartItems().then(({ data }) => {
      context.commit('setCartItems', data)
    })
  },
}
