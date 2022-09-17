const request = require('supertest')

const app = require('../app')
const CommentModel = require('../Models/CommentModel')


beforeAll(async () => {
});

afterAll(async () => {
});

describe('Feedback posting routes and Db tests', () => {
  // POST FEEDBACK
  it('returns 200 OK when add Feedback is valid',async () => {
    request(app).post('/feedback').send({
      comment: 'My feedback',
      company: 'Trendyol'
    }).then((response) => {
      expect(response.status).toBe(200)
    })
  })

  // GET TODO
  it('returns 404 when add FEEDBACK request is get', (done) => {
    request(app).get('/feedback').then((response) => {
      expect(response.status).toBe(404)
      done()
    })
  })

  // CHECK ADD FEEDBACK
  it('returns success message  when add feedback is valid',async () => {
    request(app).post('/feedback').send({
      comment: 'My feedback',
      company: 'Trendyol'
    }).then((response) => {
      expect(response.body.message).toBe("Feedback added")
    })
  })

  // CHECK FEEDBACK ADDED TO DATABASE
  it('save the todo to database', (done) => {
    request(app).post('/feedback').send({
      comment: 'My feedback',
      company: 'Trendyol'
    }).then((res) => {
      CommentModel.findOne({ _id: res.body.id }).then(todo => {
        expect(todo)
        done()
      })
    })
  })

  // CHECK FEEDBACK SAVED CORRECTLY
  it('save the feedback correctly to database', (done) => {
    request(app).post('/feedback').send({
      comment: 'My feedback',
      company: 'Trendyol'
    }).then((res) => {
      CommentModel.findOne({ _id: res.body.id }).then((todo) => {
        expect(todo.comment).toEqual('My feedback')
        done()
      })
    })
  })
})