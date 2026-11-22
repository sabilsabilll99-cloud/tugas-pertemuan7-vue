<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useCartStore, type Product } from '../stores/cart'

const cartStore = useCartStore()

const products = ref<Product[]>([
  { id: 1, name: 'Keyboard Mechanical', price: 450000 },
  { id: 2, name: 'Mouse Wireless', price: 200000 },
  { id: 3, name: 'Headset Gaming', price: 350000 }
])

function handleAddToCart(product: Product) {
  cartStore.addToCart(product)
  alert(`${product.name} ditambahkan ke keranjang!`)
}
</script>

<template>
  <div>
    <h2>Katalog Produk</h2>
    <div style="display: flex; gap: 16px;">
      <ProductCard 
        v-for="item in products" 
        :key="item.id" 
        :product="item" 
        @add-to-cart="handleAddToCart" 
      />
    </div>
  </div>
</template>