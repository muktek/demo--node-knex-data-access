const tableName = 'person'

const seedData = [
  {
    firstName: 'Allen',
    lastName: 'Ignacio',
    age: 43,
    isActive: true
  },
  {
    firstName: 'Gonzo',
    lastName: 'Bonzo',
    age: 55,
    isActive: false
  },
  {
    firstName: 'Kaity',
    lastName: 'Milner',
    age: 22,
    isActive: true
  }
]

exports.seed = function(knex){
  return knex('person')
    .del()
    .then(()=> knex.insert(seedData).into('person') )
}
