import _ from 'lodash'
import { fetchCartItems } from '@/api/carts'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

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
  updateCartItemQt(state, item) {
    const fIdx = _.findIndex(state.cartItems, ['id', item.id])
    if (fIdx > -1) {
      state.cartItems[fIdx].quantity = item.quantity
    }
  },
  deleteCartItem(state, id) {
    _.remove(state.cartItems, ['id', id])
  },
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit('setCartItems', data)
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS)
  // },
}
