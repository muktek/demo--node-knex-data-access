const dbConnect = require('./src/db/db.js')
const dbConfig = require('./knexfile.js')

const db = dbConnect(dbConfig.development)

db.select()
  .table('person')
  .then((d)=>{
    console.log(d)
    console.log('---exiting db---')
    db.destroy()
  })
