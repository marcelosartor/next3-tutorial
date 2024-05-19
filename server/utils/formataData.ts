export default (date: string, type:string = '') => {
  const dataFormatada = new Date(date)
  switch (type) {
    case 'dd/mm/yyyy': return dataFormatada.toLocaleDateString('pr-BR')
    case 'hh:mm': return dataFormatada.toLocaleTimeString('pr-BR')
    default: return dataFormatada.toLocaleString('pr-BR')
  }
}