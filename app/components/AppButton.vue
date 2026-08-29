<script setup lang="ts">
const {
  variant = "filled",
  icon = "uil:arrow-right",
  iconClass = "",
} = defineProps<{
  icon?: string;
  variant?: "filled" | "outlined";
  iconClass?: string;
}>();
</script>

<template>
  <button
    class="cursor-pointer uppercase text-sm font-medium px-5 py-2.5 flex items-center gap-1 border border-black transition"
    :class="{
      'bg-black hover:bg-primary text-primary hover:text-black':
        variant == 'filled',
      'bg-white hover:bg-white-dim border': variant == 'outlined',
    }"
  >
    <slot />
    <Icon v-if="icon" :name="icon" :class="iconClass" />
  </button>
</template>
