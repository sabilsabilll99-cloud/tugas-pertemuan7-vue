import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: number
  name: string
  price: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([])

  function addToCart(product: Product) {
    items.value.push(product)
  }

  return { items, addToCart }
})