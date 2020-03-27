const request = require('supertest');

const server = require('../api/server');
// const Users = require('./users-model.js');

describe('User Router.js', function() {
    
    describe('GET /', function() {
        it('should return 400 for users that are not auth', function() {
            return request(server)
            .get('/api/users')
            .expect(400);
        })

        it('should return JSON', function() {
            return request(server).get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        });

        // it('should return with {api: up}', function() {
        //     return request(server).get('/')
        //     .then(res => {
        //         expect(res.body.api).toBe('up');
        //     })
        // })
 
    })
})