<template>
  <div class="text-4xl">Videos</div>
  
  <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
  
  <h1 class="text-4x1 text-center">{{ $t('titulo') }}</h1>
  
  <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
    <UCard v-for="video in videos" :key="video.id">
    <template #header>
      {{ video.descricao }}
    </template>
    <iframe class="h-48 w-full" :src="video.url" title="Youtube video player" frameborder="0">
    </iframe>
    <template #footer>
      <p>{{ formataData(video.data_postagem,'dd/mm/yyyy') }}</p>
      <div class="flex justify-between">
        <UButton label="Button" @click="favoritar(video)">Adicionar Favorito</UButton>
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
  
  

</template>

<script setup lang="ts">
import { Video } from '@/interfaces/video';
import formataData from '~/server/utils/formataData';

  const { $toast } = useNuxtApp()
  const { adicionarFavorito } = useVideoStore();
  
  const favoritar = (video:Video)=>{
    adicionarFavorito(video)
    $toast.success("Toast adicionado com sucesso!")
  }

  const videos = ref<Video[]>([])
   
  onMounted(async ()=> {
    videos.value = await $fetch('/api/v1/videos')
  })
  /*
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
*/
  

</script>

<style scoped>

</style>
