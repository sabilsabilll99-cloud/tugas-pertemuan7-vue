<script setup lang="ts">
import type { Product } from '../stores/cart'

defineProps<{
  product: Product
}>()

defineEmits<{
  (e: 'add-to-cart', product: Product): void
}>()
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 16px; border-radius: 8px; width: 200px;">
    <h3>{{ product.name }}</h3>
    <p>Rp {{ product.price.toLocaleString('id-ID') }}</p>
    <button @click="$emit('add-to-cart', product)">Beli</button>
  </div>
</template>