const mysql = require('mysql2/promise');
const supertest = require('supertest')
const server = require('../src/index.js')

const api = supertest(server)

test('cases are returned as json', async () => {
  await api
    .get('/getPublic')
    .expect(200)
    
}, 1000000)

// test('a valid user can be added', async () => {
//     //completa el código
//   })

//   test('user without content is not added', async () => {
//     //completa el código
//   })