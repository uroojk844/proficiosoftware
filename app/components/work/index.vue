<script setup lang="ts">
import works from "~/assets/data/work.json";
</script>

<template>
  <AppHeader :position="2" title="Selected work" :trailing="'6 projects'" />

  <section class="grid items-start grid-cols-1 sm:grid-cols-3">
    <WorkCard
      v-for="(work, idx) in works"
      :key="work.id"
      :work
      :class="{ 'sm:col-span-2': idx == 0 }"
    />
  </section>
</template>
