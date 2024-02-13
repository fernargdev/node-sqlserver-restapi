const { getConnection, sql } = require('../database/connection')

const getProducts = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Products')

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
      .query(
        'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)'
      )

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
