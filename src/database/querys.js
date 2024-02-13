const queries = {
  getAllProducts: 'SELECT * FROM Products',
  getAllProductById: 'SELECT * FROM Products WHERE Id = @Id',
  getTotalProducts: 'SELECT COUNT(*) FROM Products',
  createNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
  deleteProductById:
    'DELETE FROM [onlinestore].[dbo].[Products] WHERE Id = @Id',
}

module.exports = { queries }
