const { getConnection } = require('../database/connection')

const getProducts = async (req, res) => {
  const pool = await getConnection()
  const result = await pool.request().query('SELECT * FROM Products')

  res.json(result.recordset)
}

module.exports = {
  getProducts,
}
