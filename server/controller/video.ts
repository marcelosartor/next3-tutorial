import { Video } from "~/interfaces/video"
import { postgresClient } from "../utils"
import { H3Event } from "h3"

const { client } = postgresClient()

export const buscaVideos = async () =>{
  /*
  throw createError({
    statusCode: 500,
    statusMessage: "Erro ao buscar videos"
  })
  */
  const resultado = await client.query('SELECT * FROM videos ORDER BY descricao ASC;')
  return resultado.rows as Video[]
}

export const buscaVideoPorId = async (event:H3Event) =>{
  try{
    const requestId = (await event.context.params?.id) as string
    const resultado = await client.query('SELECT * FROM videos where id = $1;',[requestId])
    return resultado.rows[0] as Video
  }catch  (error){
    console.log(error)
  }
}

export const adicionaVideo = async (event: H3Event): Promise<string> => {
  try{
    const request  = await readBody(event)
    await client.query(`
      INSERT INTO videos (descricao,url,data_postagem) 
      VALUES ($1, $2, CURRENT_DATE)`,
    [request.descricao, request.url])
    return 'Video adicionado com sucesso!'
  }catch  (error){
    console.log(error)
    throw createError({
      statusCode: 500,
      name: 'Erro ao criar video'
    })
  }
}

export const atualizaVideo = async (event: H3Event): Promise<string> => {
  try{
    const request  = await readBody(event)
    const requestId = (await event.context.params?.id) as string
    await client.query(`
      UPDATE videos 
      SET descricao = $1, url = $2
      WHERE id = $3 
      `,
    [request.descricao, request.url, requestId])
    return 'Video atualizado com sucesso!'
  }catch  (error){
    console.log(error)
    throw createError({
      statusCode: 500,
      name: 'Erro ao atualizar video'
    })
  }
}

export const deletaVideo = async (event: H3Event): Promise<string> => {
  try{
    const requestId = (await event.context.params?.id) as string
    await client.query(`
      DELETE FROM videos 
      WHERE id = $1 
      `,
    [requestId])
    return 'Video deletado com sucesso!'
  }catch  (error){
    console.log(error)
    throw createError({
      statusCode: 500,
      name: 'Erro ao deletar video'
    })
  }
}
