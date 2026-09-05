<script setup lang="ts">
const router = useRouter();
function scrollToTop() {
  window.scrollTo(0, 0);
  router.push("/");
}
</script>

<template>
  <div class="flex items-center gap-2 text-xs cursor-pointer" @click="scrollToTop">
    <img src="/logo.svg" alt="logo" class="w-7" />
    <div class="uppercase grid">
      <div class="flex items-center gap-2 font-semibold logo uppercase">
        proficio
        <span class="text-primary cursor opacity-0">_</span>
      </div>
      <span class="text-text-gray line-clamp-1">software solutions</span>
    </div>
  </div>
</template>

<style lang="css">
@reference "~/assets/css/main.css";

.cursor {
  animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }

  51% {
    opacity: 0;
  }
}
</style>
