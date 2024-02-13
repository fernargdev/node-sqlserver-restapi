const sql = require('mssql')
const config = require('../utils/config')

const dbSettings = {
  user: config.USER,
  password: config.PASSWORD,
  server: config.SERVER,
  database: config.DATABASE,
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

module.exports = { getConnection }
