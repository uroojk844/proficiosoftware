<script setup lang="ts">
const { t } = useLocale();

const dynamicText = computed(() => [
  t("hero.websites"),
  t("hero.products"),
  t("hero.platforms"),
  t("hero.experiences"),
]);

const currentText = ref(0);

let timeoutId: ReturnType<typeof setTimeout>;

onMounted(() => {
  if (!import.meta.client) return;

  timeoutId = setInterval(() => {
    currentText.value = (currentText.value + 1) % dynamicText.value.length;
  }, 3000);
});

onUnmounted(() => {
  if (timeoutId) clearInterval(timeoutId);
});

const data = computed(() => [
  {
    value: "30+",
    label: t("stats.projects"),
  },
  {
    value: "98%",
    label: t("stats.satisfaction"),
  },
  {
    value: "5yrs",
    label: t("stats.experience"),
  },
]);

const { isArabic } = useLocale();
</script>

<template>
  <section class="flex flex-col landing sm:pl-4 transition-all">
    <p
      class="uppercase text-desc-gray text-xs font-semibold mt-8 sm:mt-24 mb-8 flex items-center gap-2"
    >
      {{ t("hero.prefix") }}
    </p>
    <h1
      class="uppercase grid text-4xl sm:text-8xl font-black"
      :class="{ ar: isArabic }"
    >
      {{ t("hero.build") }}

      <template v-for="(item, index) in dynamicText" :key="index">
        <span
          v-if="index === currentText"
          class="uppercase bg-primary w-fit px-2 py-1 dynamicText"
          :data-text="item"
        >
          {{ item }}
        </span>
      </template>

      <span class="text-light-gray italic">{{ t("hero.convert") }}.</span>
    </h1>

    <div
      class="flex max-lg:flex-col lg:items-end justify-between gap-8 border-t-2 mt-12 xl:mt-24 py-5"
    >
      <p
        class="max-w-100 text-pretty font-body text-text-gray leading-[1.7] text-lg"
      >
        {{ t("hero.desc") }}
      </p>

      <ul class="flex gap-8">
        <li v-for="(item, index) in data" :key="index">
          <p class="text-4xl font-bold ltr">
            {{ item.value }}
          </p>
          <small class="uppercase text-desc-gray text-xs font-body">
            {{ item.label }}
          </small>
        </li>
      </ul>

      <div class="shrink-0 flex gap-4">
        <NuxtLink to="#contact" aria-label="start project">
          <AppButton>{{ t("cta.startProject") }}</AppButton>
        </NuxtLink>
        <NuxtLink to="#work" class="link" aria-label="view work">
          <AppButton variant="outlined" icon-class="rotate-90">
            {{ t("cta.viewWork") }}
          </AppButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style>
@reference "~/assets/css/main.css";

h1::after {
  @apply absolute bottom-24 sm:content-['01'] right-0 text-[6em] text-white-dim select-none -z-10;
}

h1.ar {
  @apply leading-[1.4];

  &::after {
    @apply left-0 right-auto;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0.5;
    transform: translateY(-100%);
  }
  25% {
    opacity: 1;
    transform: translateY(0%);
  }
  75% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}

.dynamicText {
  @apply select-none text-transparent relative overflow-hidden;

  &::before {
    @apply absolute content-[attr(data-text)] text-black;
    animation: slide-in 3s;
  }
}
</style>
