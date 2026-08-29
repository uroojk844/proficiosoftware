<script setup lang="ts">
defineProps<{
  border?: "t" | "r" | "b" | "l";
}>();
</script>

<template>
  <section :class="border ? `border-${border}` : ''">
    <div class="mx-auto max-w-350 w-full max-[1400px]:px-6">
      <slot />
    </div>
  </section>
</template>
