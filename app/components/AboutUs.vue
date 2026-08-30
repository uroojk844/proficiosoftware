<script setup lang="ts">
const companies = [
    "Tasq Consulting",
    "Talrn",
    "Global Trans Solutions",
    "Augmentx",
    "Superlabs",
    "Munni Foundation",
];

const milestones = [
    {
        title: "6–8",
        tag: "WEEKS",
        label: "Average delivery"
    },
    {
        title: "30+",
        tag: "PROJECTS",
        label: "Delivered to date",
    },
    {

        title: "$2M+",
        tag: "REVENUE",
        label: "Generated for clients",
    },
    {

        title: "98%",
        tag: "SATISFACTION",
        label: "Client retention rate",
    }

]

const team = [
    {
        image: "/urooj.jpg",
        name: "Urooj Khan",
        position: "Founder & Director"
    },
    {
        image: "/urooj.jpg",
        name: "Belal Naim",
        position: "Co founder & Lead Engineer"
    },
];
</script>

<template>
    <AppHeader 
        id="about" 
        :position="3" 
        title="about the studio" 
        class="mb-16"  
    />

    <section class="grid sm:grid-cols-2">
        <article class=" p-6 sm:p-12 grid gap-4 border-2 sm:border-r-0 max-sm:border-b-0">
            <p class="font-body text-lg leading-loose">
                Proficio Software Solutions is a boutique digital studio built for
                ambitious brands. We sit at the intersection of design and engineering —
                building web experiences that are as beautiful as they are effective.
            </p>

            <p class="font-body text-lg text-text-gray leading-loose">
                We keep our team small and our standards high. Every project gets
                strategic leadership, senior design, and production-grade engineering.
            </p>

            <hr class="border-light-gray" >

            <p class="text-desc-gray text-xs font-semibold">
                <small class=" uppercase block mb-4">Trusted by</small>

                <ul class="flex flex-wrap gap-x-8 leading-loose">
                    <li v-for="(company, index) in companies" :key="index">{{ company }}</li>
                </ul>
            </p>
        </article>

        <article class="border">
            <ul class="grid h-full grid-cols-2">
                <li 
                    v-for="(item, index) in milestones"
                    :key="index"
                    class="border p-4 sm:p-8 grid content-start justify-items-start gap-1">

                    <span class="text-4xl font-bold">
                        {{ item.title }}
                    </span>
                    <span class="text-2xs bg-black py-0.5 px-1 text-primary">
                        {{ item.tag }}
                    </span>
                    <small class="text-desc-gray font-body">
                        {{ item.label }}
                    </small>
                </li>
            </ul>
        </article>

        
            <figure
                v-for="(member, index) in team" :key="index"
            class="flex gap-4 items-center p-4 sm:p-8 border-b-2 border-l-2  even:border-r-2 max-sm:border-r-2"
            >
                <img 
                :src="member.image" :alt="member.name"
                class="w-12 border-2 object-cover object-center"
                >
                <figcaption class="text-sm">
                    <p class="font-medium">
                        {{ member.name }}    
                    </p>
                    <span class="font-body text-desc-gray">
                        {{ member.position }}
                    </span>
                </figcaption>
            </figure>
        <!-- </article> -->
    </section>
</template>
