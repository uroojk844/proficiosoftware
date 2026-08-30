<script setup lang="ts">
const {
  variant = "filled",
  icon = "uil:arrow-right",
  iconClass = "",
} = defineProps<{
  icon?: string;
  variant?: "filled" | "outlined" | "icon";
  iconClass?: string;
}>();
</script>

<template>
  <button
    class="cursor-pointer uppercase text-sm font-medium py-2.5 flex items-center justify-center gap-1 border border-black transition outline-primary"
    :class="{
      'bg-black hover:bg-primary text-primary hover:text-black px-5':
        variant == 'filled',
      'bg-white hover:bg-white-dim border px-5': variant == 'outlined',
      'hover:bg-primary min-w-9': variant == 'icon',
    }"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
    <Icon v-if="icon" :name="icon" :class="iconClass" />
  </button>
</template>
