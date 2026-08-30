<script setup lang="ts">
import works from "~/assets/data/work.json";
</script>

<template>
  <AppHeader id="work" :position="2" title="previous works" class="mb-16" />

  <section
    class="grid items-start border-2 border-b-0 border-r-0 grid-cols-1 sm:grid-cols-3"
  >
    <WorkCard
      v-for="(work, idx) in works"
      :key="work.id"
      :work
      :class="{ 'sm:col-span-2': idx == 0 }"
    />
  </section>
</template>
