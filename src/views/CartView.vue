<script setup lang="ts">
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2>Keranjang Belanja ({{ cartStore.items.length }} item)</h2>
    <ul v-if="cartStore.items.length > 0">
      <li v-for="(item, index) in cartStore.items" :key="index">
        {{ item.name }} - Rp {{ item.price.toLocaleString('id-ID') }}
      </li>
    </ul>
    <p v-else>Keranjang masih kosong.</p>
  </div>
</template>