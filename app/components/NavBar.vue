<script setup lang="ts">
const links = [
  {
    label: "work",
  },
  {
    label: "process",
  },
  {
    label: "about",
  },
  {
    label: "contact",
  },
];

const isOpen = ref(false);
function toggleNav() {
  isOpen.value = !isOpen.value;
}

const scrollY = ref(0);
const scrollToggleLimit = 100;

onMounted(() => {
  document.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      scrollY.value = Math.floor(window.scrollY);
    });
  });
});
</script>

<template>
  <MaxContainer
    class="sticky top-0 z-50 border-l-8 border-primary"
    v-bind="scrollY > scrollToggleLimit ? { border: 'b' } : {}"
    :class="{ 'bg-white border-transparent': scrollY > scrollToggleLimit }"
  >
    <nav class="group [[open]]:h-dvh" v-bind="isOpen ? { open: true } : {}">
      <div class="flex items-center justify-between">
        <span class="font-semibold">
          proficio
          <span class="text-primary">_</span>
        </span>

        <button class="md:hidden" @click="toggleNav">
          <Icon name="uil:bars" size="32" />
        </button>
      </div>

      <div
        class="flex items-center max-md:flex-col max-md:items-start max-md:group-not-open:hidden"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          class="flex items-center justify-between h-16 px-5 transition hover:bg-primary border-l border-light-gray"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <AppButton
        icon="uil:arrow-right"
        class="max-md:group-not-open:hidden max-sm:mb-4"
      >
        start project
      </AppButton>
    </nav>
  </MaxContainer>
</template>

<style scoped>
@reference "~/assets/css/main.css";

@utility mobile-nav {
  @apply grid grid-rows-[60px_auto_max-content] w-full;
}

@utility large-nav {
  @apply flex justify-between h-16;
}

nav {
  @apply bg-white uppercase tracking-wider text-sm max-md:mobile-nav md:large-nav items-center;
}
</style>
