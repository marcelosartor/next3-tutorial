<template>
  <div>
    Você está no video de numero {{ $route.params.id }}
  </div>
  <div>
    Você está no video de numero(idParams) {{ idParams }}
  </div>
  <VideosDetalhes/>
  <VideosControlePlay/>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'exibicao',
})

const route = useRoute()
const idParams = computed(()=>route.params.id)

</script>

