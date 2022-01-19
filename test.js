const request = require('supertest');
const app = require('./app.js');

after(() => {
  process.exit()
})

describe('GET /', function() {
  it('return html response of "Hello World!"', function() {
    // Request should be plain html "Hello World"
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',/text\/html/)
      .expect('Hello World!')
  })
})
