import { defineStore } from 'pinia'

const productStore = defineStore('products', {
  state: () => {
    return {
      products: [],
      cart: []
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const res = await fetch(' http://localhost:3005/products')
        this.products = await res.json()
      } catch (error) {
        console.log(error)
      }
    },
    addToCart(product) {
      console.log(product)
      this.cart.push(product)
    },
    removeFromCart(id) {
      console.log(id, 'form store')
      this.cart = this.cart.filter((product) => product.id !== id)
    }
  },
  getters: {
    getProduct: (state) => {
      return (id) => state.products.find((product) => product.id === id)
    },
    getNewArrival: (state) => {
      return state.products.filter((product) => product.new === 'true')
    },

    isInCart: (state) => {
      return (id) => {
        if (state.cart.find((product) => product.id === id)) return true

        return false
      }
    }
  }
})

export default productStore
