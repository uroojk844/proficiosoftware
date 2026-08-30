<script setup lang="ts">


const details = [
  {
    label: "phone",
    value: "+91 81140 76364",
    href: "tel:+918114076364",
  },
  {
    label: "email",
    value: "uroojk844@gmail.com",
    href: "mailto:uroojk844@gmail.com",
  },
  {
    label: "response",
    value: "Within 24 hours",
  },
];

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
      Thank you for reaching out to us. We'll review your submission and get
      back to you soon.
    </h2>

    <AppButton icon="uil:times" @click="modal?.close()">Close</AppButton>
  </dialog>

  <AppHeader id="contact" :position="4" title="start a project" class="mb-16" />

  <section class="grid sm:grid-cols-[min-content_1fr] border-2">
    <div class="bg-black px-6 sm:px-12 py-8 sm:py-16">
      <p class="text-white text-4xl font-bold mb-8">
        LET'S BUILD SOMETHING
        <span class="text-primary">REMARKABLE.</span>
      </p>

      <p class="text-desc-gray font-body text-pretty mb-8">
        Tell us about your project. We respond to every inquiry within 24 hours
        and offer a free 30-minute discovery call.
      </p>

      <ul class="text-desc-gray border-y border-text-gray text-xs">
        <li
          v-for="(item, index) in details"
          :key="index"
          class="py-4 flex items-center even:border-y border-text-gray"
        >
          <span class="uppercase w-30 font-semibold">{{ item.label }}</span>
          <a v-if="item.href" :href="item.href" class="font-body">
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
      <FormInput id="name" label="Name" placeholder="John Sharma" />

      <FormInput id="email" label="Email" placeholder="john@example.com" />

      <FormInput
        id="company"
        label="company"
        placeholder="Your company or project"
        :required="false"
      />

      <FormRadio :options="budgets" label="budget" class="lg:col-span-full" />

      <FormCheckBox
        :required="false"
        :options="services"
        label="services"
        class="lg:col-span-full"
      />

      <FormTextBox
        id="description"
        label="Project details"
        placeholder="Describe your project, goals, and timeline... "
        class="lg:col-span-2"
      />

      <AppButton
        class="lg:col-span-2 py-3"
        :icon="submitting ? 'svg-spinners:bars-fade' : undefined"
      >
        {{ submitting ? "Sending" : "Send message" }}
      </AppButton>
    </form>
  </section>
</template>
