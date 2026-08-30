<script setup lang="ts">
defineProps<{
  position: number;
  title: string;
  trailing?: string;
  titleClass?: string;
}>();
</script>

<template>
  <header
    class="flex flex-wrap gap-y-4 items-end justify-between uppercase text-text-gray text-sm border-b border-light-gray pb-4 mb-4"
  >
    <div class="flex items-end gap-3">
      <small class="whitespace-nowrap"
        >{{ position.toString().padStart(2, "0") }} /</small
      >
      <span
        class="text-3xl sm:text-5xl font-bold text-black"
        :class="titleClass"
      >
        {{ title }}
      </span>
    </div>

    <slot v-if="trailing || $slots.actions" name="action">
      <small class="whitespace-nowrap">{{ trailing }}</small>
    </slot>
  </header>
</template>
