<script setup lang="ts">
import { routes } from "~/routes";

const isOpen = ref(false);
function toggleNav() {
  isOpen.value = !isOpen.value;
}

const scrollY = ref(0);
const scrollToggleLimit = 50;

onMounted(() => {
  document.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      scrollY.value = Math.floor(window.scrollY);
    });
  });
});

watch(
  () => useRoute().fullPath,
  () => {
    isOpen.value = false;
  },
);
</script>

<template>
  <MaxContainer
    class="sticky top-0 z-50 border-l-8 border-l-primary"
    :class="{
      'bg-white border-l-white border-b-2': scrollY > scrollToggleLimit,
    }"
  >
    <nav class="group [[open]]:h-dvh" v-bind="isOpen ? { open: true } : {}">
      <div class="flex items-center justify-between">
        <TextLogo />

        <button
          class="md:hidden"
          :aria-label="isOpen ? 'close nav' : 'open nav'"
          @click="toggleNav"
        >
          <Icon name="uil:bars" size="32" />
        </button>
      </div>

      <div
        class="flex items-center max-md:flex-col max-md:items-start max-md:group-not-open:hidden"
      >
        <NuxtLink
          v-for="link in routes"
          :key="link.label"
          :to="link.path"
          class="link flex items-center justify-between h-16 px-5 transition hover:bg-primary hover:text-black border-l border-light-gray"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <NuxtLink href="#contact"  aria-label="start project">
        <AppButton
          icon="uil:arrow-right"
          class="max-md:group-not-open:hidden max-sm:mb-4"
        >
          start project
        </AppButton>
      </NuxtLink>
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
