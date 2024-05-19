import { Video } from "~/interfaces/video"

export default defineEventHandler(()=>{
  const videos: Video[] = [
    {
      id: 1,
      descricao: '01-Introduçao e Instalação',
      url: 'https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw',
      data_postagem: '2023-10-15'
    },
    {
      id: 2,
      descricao: '02-Configuração',
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
  
  return {
    videos
  }
})