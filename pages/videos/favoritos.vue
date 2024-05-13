<template>
  <div> Videos favoritos </div>
  <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <iframe width="550" height="400" :src="video.url" title="Youtube video player" frameborder="0">
      </iframe>
  
      <div>
        <button @click="removerFavoritos(video.id)">Remover Favorito</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const favoritos = useFavoritos()

const removerFavoritos = (id:number) =>{
  favoritos.value = favoritos.value.filter((video)=> video.id !== id)
}

</script>

