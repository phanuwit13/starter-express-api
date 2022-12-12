const {Pool, Client} = require('pg')

const pool = new Pool({
  connectionString:
    'postgres://uktchixz:46qK4ouW5HBYd42MX5TPNuqRsukcqVWp@tiny.db.elephantsql.com/uktchixz',
})

module.exports = pool;