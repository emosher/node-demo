const request = require('supertest');
const app = require('./app.js');

describe('GET /', function() {
  it('return plain text response', function() {
    // Request should be plain text "Hello World"
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',/text\/html/)
      .expect('Hello World!')
  })
})
