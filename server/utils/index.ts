import pg from 'pg'

export const postgresClient = () => {
  const client = new pg.Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABSE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432
  })

  return { client }
}