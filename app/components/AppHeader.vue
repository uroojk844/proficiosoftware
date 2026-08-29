<script setup lang="ts">
defineProps<{
  position: number;
  title: string;
  trailing?: string;
}>();
</script>

<template>
  <header
    class="flex items-end justify-between uppercase text-desc-gray text-sm border-b border-light-gray pb-2 mb-4"
  >
    <div class="flex items-end gap-3">
      <small>{{ position }} /</small>
      <span class="text-5xl font-bold text-black">
        {{ title }}
      </span>
    </div>

    <slot v-if="trailing || $slots.actions" name="action">
      <small>{{ trailing }}</small>
    </slot>
  </header>
</template>
