<script setup lang="ts">
const { name = "", required = true } = defineProps<{
  options: {
    label: string;
    value: string;
  }[];
  label: string;
  name?: string;
  required?: boolean;
}>();
</script>

<template>
  <section class="group grid gap-2">
    <div
      class="text-desc-gray text-xs uppercase group-has-[input:required]:after:content-['_*'] after:text-red-600"
    >
      {{ label }}
    </div>

    <ul class="flex gap-4 flex-wrap">
      <li
        v-for="option in options"
        :key="option.value"
        class="relative border-2 px-3 py-1.5 hover:bg-primary border-black cursor-pointer has-[input:checked]:bg-primary has-[input:checked]:border-black"
      >
        <label :for="option.value">
          {{ option.label }}
        </label>
        <input
          :id="option.value"
          type="checkbox"
          :value="option.value"
          :name="name || label"
          :required
          class="appearance-none absolute left-0 top-0 w-full h-full"
        />
      </li>
    </ul>
  </section>
</template>
