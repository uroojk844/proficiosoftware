<script setup lang="ts">
const dynamicText = ["websites", "products", "platforms", "experiences"];

const currentText = ref(0);

let timeoutId: ReturnType<typeof setTimeout>;

onMounted(() => {
  if (!import.meta.client) return;

  timeoutId = setInterval(() => {
    currentText.value = (currentText.value + 1) % dynamicText.length;
  }, 3000);
});

onUnmounted(() => {
  if (timeoutId) clearInterval(timeoutId);
});

const data = [
  {
    value: "30+",
    label: "projects",
  },
  {
    value: "98%",
    label: "satisfaction",
  },
  {
    value: "5yrs",
    label: "experience",
  },
];
</script>

<template>
  <section class="flex flex-col landing sm:pl-4 transition-all">
    <p
      class="uppercase text-desc-gray text-xs font-semibold mt-8 sm:mt-24 mb-8"
    >
      <Icon name="tabler:minus" />
      proficio software solution
    </p>
    <h1 class="grid text-4xl sm:text-8xl font-black">
      WE BUILD

      <template v-for="(item, index) in dynamicText" :key="index">
        <span
          v-if="index === currentText"
          class="uppercase bg-primary w-fit px-2 py-1 dynamicText"
          :data-text="item"
        >
          {{ item }}
        </span>
      </template>

      <span class="text-light-gray italic">THAT CONVERT.</span>
    </h1>

    <!-- STATS -->
    <div
      class="flex max-lg:flex-col lg:items-end justify-between gap-8 border-t-2 mt-12 xl:mt-24 py-5"
    >
      <p
        class="max-w-100 text-pretty font-body text-text-gray leading-[1.7] text-lg"
      >
      We build conversion-focused websites for startups and growing businesses in 6–8 weeks.
      </p>

      <ul class="flex gap-8">
        <li v-for="(item, index) in data" :key="index">
          <p class="text-4xl font-bold">
            {{ item.value }}
          </p>
          <small class="uppercase text-desc-gray text-xs font-body">
            {{ item.label }}
          </small>
        </li>
      </ul>

      <div class="shrink-0 flex gap-4">
        <NuxtLink to="#contact">
          <AppButton>start project</AppButton>
        </NuxtLink>
        <NuxtLink to="#work">
          <AppButton variant="outlined" icon-class="rotate-90">
            view work
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
