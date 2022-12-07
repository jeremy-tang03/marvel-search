const request = require('supertest');
const app = require('../app.cjs');

describe('GET /api', () => {
    test('/api', async () => {
        const response = await request(app).get('/api');
        expect(response.text).toEqual("Use \"/get/{id}\" or \"/search/{query}\"");
    })
});

describe('POST /api/get', () => {
    test('/api/get/:id', async () => {
        const response = await request(app).get('/api/Thanos');
        // waiting on db method to call
        // expect(response.body)
    })
})