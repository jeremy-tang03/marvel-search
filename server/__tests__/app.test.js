const request = require('supertest');
const app = require('../app.cjs');

describe('GET /api', () => {
    test('/api', async () => {
        const response = await request(app).get('/api');
        expect(response.text).toEqual("Hello world");
    })
});