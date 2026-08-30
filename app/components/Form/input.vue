<script setup lang="ts">
const {
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  required = true,
} = defineProps<{
  id: string;
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="group grid gap-2">
    <label
      :for="id"
      class="text-desc-gray text-xs uppercase group-has-[input:required]:after:content-['_*'] after:text-red-600"
      >{{ label }}</label
    >
    <input
      :id
      :type
      :placeholder="placeholder || label"
      :value
      :name="name || id"
      :required
      class="border-2 py-3 px-4 focus:outline-primary font-body text-sm"
    />
  </div>
</template>
