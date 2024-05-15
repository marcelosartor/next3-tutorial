<template>
  <div> Videos favoritos </div>
  <h1>{{ $t('tituloFavoritos') }}</h1>
  <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <iframe width="550" height="400" :src="video.url" title="Youtube video player" frameborder="0">
      </iframe>
  
      <div>
        <button @click="removerFavorito(video.id)">Remover Favorito</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

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

