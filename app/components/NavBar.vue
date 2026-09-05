<script setup lang="ts">
import { routes } from "~/routes";

const { isArabic, setLocale, t } = useLocale();

const navRoutes = computed(() =>
  routes.map((route) => ({
    ...route,
    label: t(`nav.${route.label}` as keyof typeof import("~/i18n/en").default),
  })),
);

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
      <div class="flex items-center justify-between gap-3">
        <TextLogo />

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="text-xs font-semibold border border-black px-2 h-7 rounded-sm hover:bg-primary transition cursor-pointer hidden"
            :title="`Translate to ${isArabic ? 'English' : 'Arabic'}`"
            :aria-label="`Translate to ${isArabic ? 'English' : 'Arabic'}`"
            @click="setLocale(isArabic ? 'en' : 'ar')"
          >
            {{ isArabic ? "EN" : "AR" }}
          </button>

          <button
            class="md:hidden"
            :aria-label="isOpen ? 'close nav' : 'open nav'"
            @click="toggleNav"
          >
            <Icon name="uil:bars" size="32" />
          </button>
        </div>
      </div>

      <div
        class="flex items-center max-md:flex-col max-md:items-start max-md:group-not-open:hidden"
      >
        <NuxtLink
          v-for="link in navRoutes"
          :key="link.label"
          :to="link.path"
          class="link flex items-center justify-between h-16 px-5 transition hover:bg-primary hover:text-black"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink
          href="https://wa.me/+918114076364"
          target="_blank"
          aria-label="start project"
        >
          <AppButton
            variant="outlined"
            icon="logos:whatsapp-monochrome-icon"
            class="max-md:group-not-open:hidden max-sm:mb-4 hover:text-green-700 gap-2 flex-row-reverse"
          >
            WhatsApp
          </AppButton>
        </NuxtLink>

        <NuxtLink href="#contact" aria-label="start project">
          <AppButton
            icon="uil:arrow-right"
            class="max-md:group-not-open:hidden max-sm:mb-4"
          >
            {{ t("cta.startProject") }}
          </AppButton>
        </NuxtLink>
      </div>
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
