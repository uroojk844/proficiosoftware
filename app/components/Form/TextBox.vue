<script setup lang="ts">
const {
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  required = true,
  rows = 4,
} = defineProps<{
  id: string;
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  rows?: number;
}>();
</script>

<template>
  <div class="group grid gap-2">
    <label
      :for="id"
      class="text-desc-gray text-xs uppercase group-has-[textarea:required]:after:content-['_*'] after:text-red-600"
      >{{ label }}</label
    >
    <textarea
      :id
      :type
      :placeholder="placeholder || label"
      :value
      :name="name || id"
      :required
      class="border-2 py-3 px-4 focus:outline-primary font-body text-sm"
      :rows
    />
  </div>
</template>
