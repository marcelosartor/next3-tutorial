<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <!--<NuxtPage :transition="{ name: 'page', mode: 'default'}"/>-->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Teste Nuxt 3',
  meta: [
    {
      name:'description',
      content: 'Site para teste Nuxt 3'
    }
  ] 
})
</script>
<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem)
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s ease;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1)
}


</style>
