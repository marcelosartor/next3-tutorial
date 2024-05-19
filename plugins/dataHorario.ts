
export default defineNuxtPlugin(({vueApp})=>{
  vueApp.directive('data-horario',{
    mounted(el,binding){
      const dataFormatada = new Date(el.innerText)
      console.log('el.innerText:',el.innerText)
      console.log('el',el)
      console.log('binding.value:',binding.value)
      el.innerHTML = formataData(dataFormatada,binding.value)
    }
  })
})

const formataData = (date: Date, type:string = '') => {
  switch (type) {
    case 'yyyy-mm-dd': return date.toLocaleDateString('pr-BR')
    case 'dd/mm/yyyy': return date.toLocaleDateString('pr-BR')
    case 'hh:mm': return date.toLocaleTimeString('pr-BR')
    default: return date.toLocaleString('pr-BR')
  }
}