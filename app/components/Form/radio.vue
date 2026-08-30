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
  <div class="group grid gap-2">
    <label
      class="text-desc-gray text-xs uppercase group-has-[input:required]:after:content-['_*'] after:text-red-600"
      >{{ label }}</label
    >

    <div class="flex gap-4 flex-wrap">
      <input
        v-for="option in options"
        :key="option.value"
        type="radio"
        :value="option.value"
        :data-label="option.label"
        :name="name || label"
        :required
        class="radio"
      />
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.radio {
  @apply appearance-none border-2 border-desc-gray checked:border-black py-2 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-primary hover:text-black checked:bg-primary text-black  outline-none focus:border-primary;

  &::before {
    content: attr(data-label);
  }
}
</style>
