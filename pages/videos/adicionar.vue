<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const router = useRouter()
const { $toast } = useNuxtApp()

const schema = object({
  descricao: string().required('Required'),
  url: string().required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  descricao: undefined,
  url: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  try{
    console.log(event.data)
    await $fetch('/api/v1/videos',
      {
        method: 'POST',
        body: state
      }
    )
    router.push('/videos')
    $toast.success("Vídeo adicionado com sucesso")

  }catch(error){
    console.log('error')
    $toast.error("Erro ao incluir vídeo")
  }
  
}
</script>

<template>
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
</template>