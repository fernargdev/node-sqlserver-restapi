const { getConnection, sql, queries } = require('../database/indexDb')

const getProducts = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllProducts)

    res.json(result.recordset)
  } catch (exception) {
    res.status(500)
    res.send(exception.message)
  }
}

const createdNewProducts = async (req, res) => {
  const { name, description } = req.body
  let { quantity } = req.body

  if (!name || !description) res.status(400).json({ error: 'Missing data' })
  if (!quantity) quantity = 0

  try {
    const pool = await getConnection()
    await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(queries.createNewProduct)

    res.json({ name, description, quantity })
  } catch (exception) {
    res.status(500)
    res.send(exception.message)
  }
}

module.exports = {
  getProducts,
  createdNewProducts,
}
