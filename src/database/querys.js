const queries = {
  getAllProducts: 'SELECT * FROM Products',
  getAllProductById: 'SELECT * FROM Products WHERE Id = @Id',
  getTotalProducts: 'SELECT COUNT(*) FROM [onlinestore].[dbo].[Products]',
  createNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
  deleteProductById:
    'DELETE FROM [onlinestore].[dbo].[Products] WHERE Id = @Id',
  updateProductById:
    'UPDATE [onlinestore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id',
}

module.exports = { queries }
