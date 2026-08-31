<script setup lang="ts">
interface IWorkCard {
  id: number;
  company: string;
  title: string;
  description: string;
  category: string;
  link: string;
  tags: string[];
  image: string;
}

defineProps<{
  work: IWorkCard;
}>();
</script>

<template>
  <article class="group grid content-start border-b-2 border-r-2 p-4 h-full">
    <figure class="relative overflow-hidden mb-3">
      <img
        :src="work.image"
        :alt="work.company"
        loading="lazy"
        class="transition duration-500 group-hover:scale-105 aspect-video object-cover object-center w-full h-full"
      />

      <small
        class="absolute top-0 left-0 bg-primary py-1 px-2 uppercase text-xs tracking-wider shadow-[4px_4px_black]"
      >
        {{ work.category }}
      </small>
    </figure>

    <div class="flex justify-between items-center mb-1">
      <div>
        <p class="text-desc-gray text-sm font-semibold mb-1">
          {{ work.company }}
        </p>
        <p class="font-semibold capitalize">
          {{ work.title }}
        </p>
      </div>

      <NuxtLink
        :href="work.link"
        target="_blank"
        class="link"
        title="visit website"
      >
        <AppButton
          variant="icon"
          class="group-hover:rotate-45"
          icon-class="-rotate-45"
        />
      </NuxtLink>
    </div>
    <p class="text-desc-gray text-sm mb-2 font-body">
      {{ work.description }}
    </p>

    <ul class="flex flex-wrap gap-2">
      <li
        v-for="tag in work.tags"
        :key="tag"
        class="border py-0.5 px-1 text-[10px] leading-[1.2] text-desc-gray uppercase border-desc-gray font-medium tracking-wider"
      >
        {{ tag }}
      </li>
    </ul>
  </article>
</template>
