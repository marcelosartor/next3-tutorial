<template>
  <div>
    Você está no video de numero {{ video?.id }}
  </div>
  <div>
    Você está no video de numero(idParams) {{ idParams }}
  </div>
  <UCard class="w-[800px] justify-center">
    <template #header>
      {{ video?.descricao }}
    </template>
    <iframe class="h-[500px] w-full" :src="video?.url" title="Youtube video player" frameborder="0">
    </iframe>
    <template #footer>
      <p v-data-horario="'dd/mm/yyyy'">{{ video?.data_postagem || ''}}</p>
      <div class="flex justify-between">
        <UButton label="Button" @click="abriModal()">Editar Video</UButton>
        <UButton label="Deletar Video" color="gray" @click="deletarVideo()">
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" />
            </template>
          </UButton>
      </div>
    </template>
  </UCard>


  <VideosDetalhes/>
  <VideosControlePlay/>

  <div>
    <UModal v-model="isOpen">
      <div class="p-4">
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Descrição do video" name="descricao">
      <UInput v-model="state.descricao" />
    </UFormGroup>
   
    <UFormGroup label="URL do video" name="url">
      <UInput v-model="state.url" />
   </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { Video } from '~/interfaces/video';
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
/*
definePageMeta({
  layout: 'exibicao',
  middleware: ['videos','auth']
})
*/
const router = useRouter()
const isOpen = ref(false)
const route = useRoute()
const idParams = computed(()=>route.params.id)
const video = ref<Video>()
const { $toast } = useNuxtApp()

const schema = object({
  descricao: string().required('Required'),
  url: string().required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  id: 0,
  descricao: '',
  url: ''
})



onMounted(async ()=>{
  video.value = await $fetch(`/api/v1/videos/${idParams.value}`)
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  try{
    await $fetch(`/api/v1/videos/${idParams.value}`,
      {
        method: 'PUT',
        body: state
      }
    )
    router.push('/videos')
    $toast.success("Vídeo Editado com sucesso")
    isOpen.value = false

  }catch(error){
    console.log('error')
    $toast.error("Erro ao incluir vídeo")
  }
  
}

const abriModal = () => {
  state.descricao = video.value?.descricao || ''
  state.url = video.value?.url || ''
  isOpen.value = true
}

const deletarVideo = async () =>{
  try{
    await $fetch(`/api/v1/videos/${idParams.value}`,
      {
        method: 'DELETE',
      }
    )
    router.push('/videos')
    $toast.success("Vídeo deletado com sucesso")
    isOpen.value = false

  }catch(error){
    console.log('error')
    $toast.error("Erro ao excluir vídeo")
  }

}
</script>

