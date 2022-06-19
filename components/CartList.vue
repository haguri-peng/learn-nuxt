<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="cartItem in getCartItems" :key="cartItem.id" class="list-item">
        <input
          v-model="arrChk"
          type="checkbox"
          class="input-checkbox"
          :value="cartItem.id"
        />
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="description">
          <p>Name: {{ cartItem.name }}</p>
          <p>Price: {{ cartItem.price }}</p>
          <p>
            Quantity:
            <input
              type="number"
              class="input-number"
              :value="cartItem.quantity"
              @blur="
                updateQuantity(
                  $event.target,
                  cartItem.id,
                  cartItem.quantity,
                  Number($event.target.value)
                )
              "
            />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_CART_ITEMS } from '@/store/index'
import { updateQT } from '@/api/carts'

export default {
  data() {
    return {
      arrChk: [],
    }
  },
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
  computed: {
    ...mapGetters(['getCartItems']),
  },
  methods: {
    updateQuantity(target, id, oldValue, newValue) {
      if (oldValue !== newValue) {
        if (newValue < 1) {
          alert('0보다 커야합니다.')
          target.value = oldValue
        } else {
          // 수량 정보를 DB와 vuex에 반영
          updateQT(id, { quantity: newValue })
          this.$store.commit('updateCartItemQt', {
            id,
            quantity: newValue,
          })
        }
      }
    },
    getCheckedList() {
      // console.log(this.arrChk)
      if (this.arrChk.length === 0) {
        alert('체크된 항목이 없습니다.')
      } else {
        this.$emit('deleteItems', this.arrChk)
      }
    },
  },
}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
  margin: 5px 0;
}
.thumbnail {
  width: 150px;
  height: 150px;
}
.description {
  padding: 2rem 1rem;
}
.input-number {
  width: 50px;
  /* text-align: center; */
}
.input-checkbox {
  margin: 4rem 1rem 0 0;
}
</style>
