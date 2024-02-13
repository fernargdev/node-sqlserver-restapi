require('dotenv').config()

const PORT = process.env.PORT || 3003
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const SERVER = process.env.SERVER
const DATABASE = process.env.DATABASE

module.exports = {
  PORT,
  USER,
  PASSWORD,
  SERVER,
  DATABASE,
}
