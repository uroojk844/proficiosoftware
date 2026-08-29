<script setup lang="tsx">
const {
  list = [
    "React",
    "Analytics",
    "webdesign",
    "ecommerce",
    "React",
    "Analytics",
    "webdesign",
    "ecommerce",
  ],
  duration = 10,
} = defineProps<{
  list?: string[];
  duration?: number;
}>();
</script>

<template>
  <div class="marquee">
    <ul
      v-for="idx in 2"
      :key="idx"
      v-bind="idx == 2 ? { 'aria-hidden': true } : {}"
    >
      <li v-for="value in list" :key="value">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";

@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee {
  @apply overflow-hidden flex;

  ul {
    animation: scroll v-bind(duration + "s") linear infinite;
    @apply bg-black flex w-max gap-px p-px;
  }

  li {
    @apply uppercase px-8 whitespace-nowrap font-semibold bg-primary;
  }
}
</style>
