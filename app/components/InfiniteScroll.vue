<script setup lang="ts">
const {
  list = [
    "React",
    "Vue & Nuxt",
    "Flutter",
    "Mobile app development",
    "web design",
    "e-commerce",
    "web development",
    "app development",
    "ai integration",
    "chatbot integration",
    "seo",
    "social media setup",
    "digital marketing",
    "custom softwares",
  ],
  duration = 15,
} = defineProps<{
  list?: string[];
  duration?: number;
}>();

const { isArabic } = useLocale();
</script>

<template>
  <div class="marquee" :class="{ ar: isArabic }">
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

@keyframes scroll-lr {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(50%);
  }
}

.marquee {
  @apply overflow-hidden flex;

  ul {
    animation: scroll v-bind(duration + "s") linear infinite;
    @apply bg-black flex w-max gap-px p-px;
  }

  &.ar ul {
    animation-name: scroll-lr;
  }

  li {
    @apply uppercase px-8 whitespace-nowrap font-medium bg-primary;
  }
}
</style>
