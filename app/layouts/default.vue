<script setup lang="ts">
import { VueLenis } from "lenis/vue";

const lenisOptions = {
  duration: 1.2,
  smoothWheel: true,
  autoRaf: true,
};
</script>

<template>
  <section>
    <VueLenis root :options="lenisOptions" />
    <NavBar />
    <NuxtPage />
    <AppFooter />
  </section>
</template>
