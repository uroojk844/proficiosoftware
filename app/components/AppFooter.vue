<script setup lang="ts">
import { routes } from "~/routes";

const { t } = useLocale();

const footerRoutes = computed(() =>
  routes.map((route) => ({
    ...route,
    label: t(`nav.${route.label}` as keyof typeof import("~/i18n/en").default),
  })),
);

const contacts = [
  {
    label: "+91 81140 76364",
    value: "tel:+918114076364",
  },
  {
    label: "uroojk844@gmail.com",
    value: "mailto:uroojk844@gmail.com",
  },
];
</script>

<template>
  <MaxContainer class="bg-black py-8">
    <footer class="grid sm:grid-cols-3 text-text-gray border border-black-2">
      <section class="p-8">
        <div class="flex items-center gap-4 mb-4">
          <img src="/logo.svg" alt="logo" />
          <div class="uppercase grid">
            <TextLogo class="text-white text-xs" :show-logo="false" />
            <span class="text-text-gray text-xs">software solutions</span>
          </div>
        </div>
        <p class="text-sm font-body">
          {{ t("footer.tagline") }}
        </p>
      </section>
      <section class="uppercase border-x border-black-2 p-8">
        <h3 class="mb-2 font-semibold text-sm">{{ t("footer.navigation") }}</h3>

        <ul>
          <li v-for="route in footerRoutes" :key="route.label" class="grid">
            <NuxtLink
              :to="route.path"
              class="py-3 border-b border-black-2 bod font-semibold text-xs"
            >
              {{ route.label }}
            </NuxtLink>
          </li>
        </ul>
      </section>
      <section class="uppercase border-x border-black-2 p-8">
        <h3 class="mb-5 font-semibold text-sm">{{ t("footer.contact") }}</h3>

        <ul class="grid mb-4">
          <li
            v-for="(contact, index) in contacts"
            :key="contact.label"
            class="mb-3 text-xs hover:bg-black"
          >
            <a
              :href="contact.value"
              target="_blank"
              class="lowercase font-body"
              :class="{ ltr: index == 0 }"
            >
              {{ contact.label }}
            </a>
          </li>
        </ul>

        <NuxtLink href="#contact" aria-label="start project">
          <AppButton class="bg-primary" icon-class="text-black">
            <span class="text-black">{{ t("cta.startProject") }}</span>
          </AppButton>
        </NuxtLink>
      </section>
    </footer>
  </MaxContainer>
  <div
    class="bg-black text-text-gray text-xs py-4 border-t border-black-2 flex items-center justify-center"
  >
    {{ t("footer.rights") }}
  </div>
</template>
