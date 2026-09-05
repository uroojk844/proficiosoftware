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
    <span class="text-primary cursor opacity-0">_</span>
  </NuxtLink>
</template>

<style lang="css">
@reference "~/assets/css/main.css";

.cursor {
  animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }

  51% {
    opacity: 0;
  }
}
</style>
