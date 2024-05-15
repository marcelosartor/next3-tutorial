import { Video } from "~/interfaces/video"

export const useVideoStore = defineStore("videos", 
() => {
  const favoritos = ref<Video[]>([])
  
  const adicionarFavorito = (video: Video)=>{
    const favoritosFiltrados = favoritos.value.some((v)=>v.id === video.id)
    if(!favoritosFiltrados){
      favoritos.value.push(video);
    }
  }

  const deletarFavorito = (id: number)=>{
    favoritos.value = favoritos.value.filter((v)=>v.id !== id)
  }
  
  return { favoritos, adicionarFavorito,deletarFavorito}

},
{
  //persist: true // Por defaul cookie
  persist: {
    storage: persistedState.localStorage
  }
})