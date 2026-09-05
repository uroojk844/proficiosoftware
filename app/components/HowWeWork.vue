<script setup lang="ts">
import strategiesEn from "~/assets/data/work-strategy.en.json";
import strategiesAr from "~/assets/data/work-strategy.ar.json";

const { t, locale } = useLocale();

const strategies = computed(() =>
  locale.value === "ar" ? strategiesAr : strategiesEn,
);
</script>

<template>
  <AppHeader
    id="process"
    :position="3"
    :title="t('process.title')"
    title-class="text-white"
    class="border-text-gray border-none"
  />

  <ul>
    <li
      v-for="(st, idx) in strategies"
      :key="idx"
      class="grid sm:grid-cols-[20ch_32ch_auto] items-center border-t border-text-gray last:border-b max-sm:gap-4 max-sm:py-8"
    >
      <span class="text-primary text-7xl font-bold">
        {{ String(idx + 1).padStart(2, "0") }}
      </span>
      <span
        class="flex items-center sm:justify-center text-white sm:h-40 whitespace-nowrap text-lg font-bold sm:border-x border-text-gray"
      >
        {{ st.title }}
      </span>
      <p class="text-desc-gray sm:p-4 font-body">
        {{ st.description }}
      </p>
    </li>
  </ul>
</template>
