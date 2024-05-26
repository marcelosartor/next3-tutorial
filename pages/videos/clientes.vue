<template>
<div>
  <div>
    <Head>
      <Title>Cliente - Test Nuxt</Title>
      <Meta name="description" content="Teste Meta"/>
      <Style type="text/css" children="body { background: gray  ;}"></Style>
    </Head>
    <h1 class="text-5xl text-center my-4">Clientes</h1>
    {{ status }}
    <button @click="refresh" class="px-4 py-2 bg-green-400 shadow-md rounded-md">
      Recaregar
    </button>
    <div v-if="pending">
      <h2>Carregando....</h2>
    </div>
    <div v-else-if="error">
      <h2>Erro:{{error.message}}</h2>
    </div>
    <div v-else class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div class="shadow-md px-4 py-2" v-for="c in clientes" :key="c.id">
          <img class="rounded-full mx-auto" :src="c.foto"/>    
          <h3 class="text-2xl text-center">{{c.nome}}</h3>
        </div>
    </div>
  </div>
  <div class="flex gap-2">
    <button v-for="i in 2"
     :key="i"
     @click="irPagina(i)"
      class="px-2 bg-slate-400">

      {{ i }}
    </button>
  </div>
</div>    
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition:{
    name:"slide",
  }
})

/* Exemplo */
console.log('----useAsyncData---------------------------')
//const requisicaoAsyncData = await useAsyncData('cliente',() => {
//  return $fetch('https://reqres.in/api/users?page=2')
//})
//const {payload} = useNuxtApp()
//console.log( payload.data['cliente'] )
//const {payload} = useNuxtApp()
//console.log( payload.data['cliente'] )
const { data: cliente  } = await useAsyncData('cliente',async () => {
  const [ pessoas, aleatorios ] = await Promise.all([
    $fetch('https://reqres.in/api/users'),
    $fetch('https://reqres.in/api/unknown'),
  ])
  return { pessoas, aleatorios }
})
console.log('cliente.value.pessoas:',cliente.value?.pessoas)
console.log('cliente.value.aleatorios:',cliente.value?.aleatorios)

/* Exemplo */
const pagina = ref(1)
console.log('---useFetch----------------------------')
const { data: clientes, pending, error, refresh, execute, status} = useFetch(`https://reqres.in/api/users`,{
  lazy: true,
  //pick: ['page','data']
  transform: (clientes:any) => { 
    return clientes.data.map((p:any) =>({
    id: p.id,
    nome: p.first_name,
    sobrenome: p.last_name,
    foto: p.avatar
  }))},
  watch: [pagina],
  query:{
    page: pagina
  }
}) 

const irPagina = (i:number)=>{
  pagina.value = i
}

</script>

<style scoped>

</style>