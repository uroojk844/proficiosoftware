<script setup lang="ts">
import worksEn from "~/assets/data/work.en.json";
import worksAr from "~/assets/data/work.ar.json";

const { t, locale } = useLocale();

const works = computed(() => (locale.value === "ar" ? worksAr : worksEn));
</script>

<template>
  <AppHeader id="work" :position="2" :title="t('work.title')" class="mb-16" />

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
