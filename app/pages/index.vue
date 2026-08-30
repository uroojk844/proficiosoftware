<template>
  <main>
    <MaxContainer class="py-6 border-l-8 border-primary">
      <LandingPage />
    </MaxContainer>
    <InfiniteScroll />
    <MaxContainer class="py-16">
      <LazyWork />
    </MaxContainer>
    <MaxContainer class="py-16 bg-black">
      <LazyHowWeWork />
    </MaxContainer>
    <MaxContainer class="py-16">
      <LazyAboutUs />
    </MaxContainer>
    <MaxContainer class="py-16">
      <LazyContact />
    </MaxContainer>
  </main>
</template>

<style>
@reference "~/assets/css/main.css";
</style>
