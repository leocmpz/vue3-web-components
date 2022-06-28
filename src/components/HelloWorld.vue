<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div>Hello World! {{ msg }}</div>
</template>