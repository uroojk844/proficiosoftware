<script setup lang="ts">
const { t } = useLocale();

const companies = [
  "Tasq Consulting",
  "Talrn",
  "Global Trans Solutions",
  "Augmentx",
  "Superlabs",
  "Munni Foundation",
];

const milestones = computed(() => [
  {
    title: "6–8",
    tag: t("about.milestone.weeksTag"),
    label: t("about.milestone.weeksLabel"),
  },
  {
    title: "30+",
    tag: t("about.milestone.projectsTag"),
    label: t("about.milestone.projectsLabel"),
  },
  {
    title: "$2M+",
    tag: t("about.milestone.revenueTag"),
    label: t("about.milestone.revenueLabel"),
  },
  {
    title: "98%",
    tag: t("about.milestone.satisfactionTag"),
    label: t("about.milestone.satisfactionLabel"),
  },
]);
</script>

<template>
  <AppHeader
    :id="'about'"
    :position="4"
    :title="t('about.title')"
    class="mb-16"
  />

  <section class="grid sm:grid-cols-2">
    <article
      class="p-6 sm:p-12 grid gap-4 border-2 sm:border-r-0 max-sm:border-b-0"
    >
      <p class="font-body text-lg leading-loose">
        {{ t("about.text1") }}
      </p>

      <p class="font-body text-lg text-text-gray leading-loose">
        {{ t("about.text2") }}
      </p>

      <hr class="border-light-gray" />

      <div class="text-desc-gray text-xs font-semibold">
        <small class="uppercase block mb-4">{{ t("about.trusted") }}</small>

        <ul class="flex flex-wrap gap-x-8 leading-loose">
          <li v-for="(company, index) in companies" :key="index">
            {{ company }}
          </li>
        </ul>
      </div>
    </article>

    <article class="border">
      <ul class="grid h-full grid-cols-2">
        <li
          v-for="(item, index) in milestones"
          :key="index"
          class="border p-4 sm:p-8 grid content-start justify-items-start gap-1"
        >
          <span class="text-4xl font-bold ltr">
            {{ item.title }}
          </span>
          <span class="text-2xs bg-black py-0.5 px-1 text-primary">
            {{ item.tag }}
          </span>
          <small class="text-desc-gray font-body">
            {{ item.label }}
          </small>
        </li>
      </ul>
    </article>
  </section>
</template>
