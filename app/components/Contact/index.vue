<script setup lang="ts">
const { t } = useLocale();

const details = computed(() => [
  {
    label: t("contact.detail.phone"),
    value: "+91 81140 76364",
    href: "tel:+918114076364",
  },
  {
    label: t("contact.detail.email"),
    value: "uroojk844@gmail.com",
    href: "mailto:uroojk844@gmail.com",
  },
  {
    label: t("contact.detail.response"),
    value: t("contact.detail.responseValue"),
  },
]);

const budgets = [
  {
    label: "< $5k",
    value: "<5000",
  },
  {
    label: "$5k - $15k",
    value: "5000-15000",
  },
  {
    label: "$15k - 50k",
    value: "15000-50000",
  },
  {
    label: "$50k+",
    value: "50000+",
  },
];

const services = [
  {
    label: "New Design",
    value: "New Design",
  },
  {
    label: "Redesign",
    value: "Redesign",
  },
  {
    label: "Web App",
    value: "Web App",
  },
  {
    label: "Ecommerce",
    value: "Ecommerce",
  },
  {
    label: "Custom Software",
    value: "Custom Software",
  },
];

const modal = useTemplateRef("model");
const submitting = ref(false);

async function handleSubmit(event: SubmitEvent) {
  submitting.value = true;
  const formData = new FormData(event.target as HTMLFormElement);
  formData.append("access_key", "d7ccd6d0-dae4-4f5b-8f0e-b3221100513f");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  await response.json();

  if (response.ok) {
    modal.value?.showModal();
    (event.target as HTMLFormElement).reset();
  }
  submitting.value = false;
}
</script>

<template>
  <dialog
    ref="model"
    class="[[open]]:grid justify-items-center inset-auto border-2 p-16 bg-white fixed z-50 top-1/2 left-1/2 -translate-1/2 w-xl"
  >
    <h2 class="text-center mb-8">
      {{ t("contact.success") }}
    </h2>

    <AppButton icon="uil:times" @click="modal?.close()">
      {{ t("cta.close") }}
    </AppButton>
  </dialog>

  <AppHeader
    :id="'contact'"
    :position="5"
    :title="t('contact.title')"
    class="mb-16"
  />

  <section class="grid sm:grid-cols-[min-content_1fr] border-2 slideup">
    <div class="bg-black px-6 sm:px-12 py-8 sm:py-16">
      <p class="text-white text-4xl font-bold mb-8">
        {{ t("contact.heroLine1") }}
        <span class="text-primary">{{ t("contact.heroLine2") }}</span>
      </p>

      <p class="text-desc-gray font-body text-pretty mb-8">
        {{ t("contact.desc") }}
      </p>

      <ul class="text-desc-gray border-y border-text-gray text-xs">
        <li
          v-for="(item, index) in details"
          :key="index"
          class="py-4 flex items-center gap-3 even:border-y border-text-gray"
        >
          <span class="uppercase w-30 font-semibold">{{ item.label }}</span>
          <a
            v-if="item.href"
            :href="item.href"
            class="font-body"
            :class="{ ltr: index == 0 }"
          >
            {{ item.value }}
          </a>
          <span v-else class="font-body">{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <form
      class="gap-4 grid content-start p-6 sm:p-8 lg:grid-cols-2"
      @submit.prevent="handleSubmit"
    >
      <FormInput
        id="name"
        :label="t('contact.form.name')"
        :placeholder="t('contact.form.namePlaceholder')"
      />

      <FormInput
        id="email"
        :label="t('contact.form.email')"
        :placeholder="t('contact.form.emailPlaceholder')"
      />

      <FormInput
        id="company"
        :label="t('contact.form.company')"
        :placeholder="t('contact.form.placeholder.company')"
        :required="false"
      />

      <FormRadio
        :options="budgets"
        :label="t('contact.form.budget')"
        class="lg:col-span-full"
      />

      <FormCheckBox
        :required="false"
        :options="services"
        :label="t('contact.form.services')"
        class="lg:col-span-full"
      />

      <FormTextBox
        id="description"
        :label="t('contact.form.projectDetails')"
        :placeholder="t('contact.form.placeholder.project')"
        class="lg:col-span-2"
      />

      <AppButton
        class="lg:col-span-2 py-3"
        :icon="submitting ? 'svg-spinners:bars-fade' : undefined"
      >
        {{ submitting ? t("contact.form.sending") : t("contact.form.send") }}
      </AppButton>
    </form>
  </section>
</template>

<style scoped>
.slideup {
  animation-name: zoom;
  animation-timeline: view();
  animation-range: entry 0% cover 20%;
  animation-fill-mode: both;
}

@keyframes zoom {
  from {
    transform: translateY(400px) scale(0.75);
  }

  to {
    transform: translateY(0) scale(1);
  }
}
</style>
