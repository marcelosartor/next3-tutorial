interface Rotas {
  name: string
  path: string
}

export default  () => {
  const rotas:Rotas[] = [
    { name: 'Home', path: '/'},
    { name: 'videos', path: '/videos'},
    { name: 'Adicionar Videos', path: '/videos/adicionar'},
    { name: 'Favoritos', path: '/videos/favoritos'},
    { name: 'Clientes', path: '/videos/clientes'},
  ] 
  return rotas
}