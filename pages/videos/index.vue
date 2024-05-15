<template>
  <div>Videos</div>
  
  <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
  <h1>{{ $t('titulo') }}</h1>
  <div class="videos">
    <div v-for="video in videos" :key="video.id">
      <h2>{{ video.descricao }}</h2>
      <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
      <iframe width="550" height="400" :src="video.url" title="Youtube video player" frameborder="0">
      </iframe>
   
      <div>
        <button @click="videoStore.adicionarFavorito(video)">Adicionar Favorito</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { Video } from '@/interfaces/video';

  const { $toast } = useNuxtApp()

  onMounted(()=>{
    $toast.success("Toast adicionado com sucesso!")
  })

   
  const videos: Video[] = [
    {
      id: 1,
      descricao: '01-Introduçao e Instalação',
      url: 'https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw',
      data_postagem: '2023-10-15'
    },
    {
      id: 2,
      descricao: '03-Configuração',
      url: 'https://www.youtube.com/embed/JbbB84bnPog?si=CBRrE5OSXmxbZ2ZA',
      data_postagem: '2023-10-20'
    },
    {
      id: 3,
      descricao: '03-Pages',
      url: 'https://www.youtube.com/embed/S99sVicr8NI?si=awG5U6hDT-kHlEK4',
      data_postagem: '2023-10-10'
    },
    {
      id: 4,
      descricao: '04-Components',
      url: 'https://www.youtube.com/embed/cCHWanw49l8?si=b-a-31JJqjXxleoV',
      data_postagem: '2023-10-05'
    },
  ]

  const videoStore = useVideoStore();

  /* Use state
  const favoritos = useFavoritos()

  const adicionarFavoritos = (video: Video) => {
    favoritos.value.push(video)
  }
  */

</script>

<style scoped>
  .videos {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .videos button {
    display: inline-block;
  }

</style>
