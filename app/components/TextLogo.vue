<script setup lang="ts">
const { showLogo = true } = defineProps<{
  showLogo?: boolean;
}>();
</script>

<template>
  <NuxtLink
    to="/"
    class="flex items-center gap-2 font-semibold logo uppercase text-xl"
  >
    <img v-if="showLogo" src="/logo.svg" class="w-6" />
    proficio
    <span class="text-primary cursor">_</span>
  </NuxtLink>
</template>

<style lang="css">
@reference "~/assets/css/main.css";

.cursor {
  animation: insert 1s linear infinite;
}

@keyframes insert {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
