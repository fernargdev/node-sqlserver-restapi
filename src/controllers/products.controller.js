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

const getAllProductById = async (req, res) => {
  const { id } = req.params

  const pool = await getConnection()
  const result = await pool
    .request()
    .input('Id', id)
    .query(queries.getAllProductById)

  res.send(result.recordset[0])
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

const deleteProductById = async (req, res) => {
  const { id } = req.params

  const pool = await getConnection()
  await pool.request().input('Id', id).query(queries.deleteProductById)

  res.sendStatus(204)
}

// const getTotalProducts = async (req, res) => {
//   const pool = await getConnection()

//   const result = await pool.request().query(queries.getTotalProducts)
//   res.json(result.recordset[0][''])
// }

// get total of products
const getTotalProducts = async (req, res) => {
  const pool = await getConnection()

  const result = await pool.request().query(queries.getTotalProducts)
  res.json(result.recordset[0][''])
}

const updateProductById = async (req, res) => {
  const { name, description } = req.body
  let { quantity } = req.body

  if (!name || !description) res.status(400).json({ error: 'Missing data' })
  if (!quantity) quantity = 0
}

module.exports = {
  getProducts,
  createdNewProducts,
  getAllProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
}
