const queries = {
  getAllProducts: 'SELECT * FROM Products',
  createNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
  getAllProductById: 'SELECT * FROM Products WHERE Id = @Id',
  deleteProductById:
    'DELETE FROM [onlinestore].[dbo].[Products] WHERE Id = @Id',
}

module.exports = { queries }
