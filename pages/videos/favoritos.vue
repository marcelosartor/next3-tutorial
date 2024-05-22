<template>
<div>  
  <h1 class="text-4xl text-center">{{ $t('tituloFavoritos') }}</h1>
  
  <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
    <UCard v-for="video in favoritos" :key="video.id">
      <template #header>
        {{ video.descricao }}
      </template>
      <iframe class="h-48 w-full" :src="video.url" title="Youtube video player" frameborder="0">
      </iframe>
      <template #footer>
        <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
        <div class="flex justify-between">
          <UButton label="Button" @click="removerFavorito(video.id)">Remover Favorito</UButton>
          <NuxtLink :to="{
              name: 'videos-id',
              params: { id: video.id.toString() }
            }">
            <UButton label="Ver Video" color="gray" class="">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" />
              </template>
            </UButton>
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</div>  
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'exibicao',
  //pageTransition:{
  //  name:"slide",
  // }
})
const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore)
const { $toast } = useNuxtApp()

const removerFavorito = (id:number) =>{
  videoStore.deletarFavorito(id)
  $toast.error('Removido com sucesso')  
}
/* Use state
const favoritos = useFavoritos()
const deletarFavorito = (id:number) =>{
  favoritos.value = favoritos.value.filter((video)=> video.id !== id)
}
*/

</script>

