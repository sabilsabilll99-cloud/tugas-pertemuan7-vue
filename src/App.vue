<script setup lang="ts">
import { useCartStore } from './stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <nav style="margin-bottom: 20px; display: flex; gap: 16px;">
    <router-link to="/">Beranda Katalog</router-link>
    <router-link to="/cart">Keranjang ({{ cartStore.items.length }})</router-link>
  </nav>
  <router-view />
</template>