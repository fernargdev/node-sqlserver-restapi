const sql = require('mssql')
const { get } = require('../app')

const dbSettings = {
  user: 'angel',
  password: 'roda1234',
  server: 'localhost',
  database: 'onlinestore',

  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
}

async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings)
    return pool
  } catch (exception) {
    console.log(exception)
  }
}

getConnection()
