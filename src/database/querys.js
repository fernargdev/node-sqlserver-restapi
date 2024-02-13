const queries = {
  getAllProducts: 'SELECT * FROM Products',
  createNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
}

module.exports = { queries }
