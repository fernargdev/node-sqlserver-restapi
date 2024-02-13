const { getConnection, sql } = require('../database/connection')
const { queries } = require('../database/querys')

module.exports = {
  getConnection,
  sql,
  queries,
}
