const { getConnection } = require('../database/connection')

const getProducts = async (req, res) => {
  const pool = await getConnection()
  const result = await pool.request().query('SELECT * FROM Products')

  res.json(result.recordset)
}

const createdNewProducts = (req, res) => {
  const { name, description } = req.body

  console.log(name, description)

  res.json('new product')
}

module.exports = {
  getProducts,
  createdNewProducts,
}
