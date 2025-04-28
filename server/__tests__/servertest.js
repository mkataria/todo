const request = require('supertest');
const app = require('../server');

describe('Server API Tests', () => {
    describe('GET /time', () => {
        it('should return the current time in JSON format', async () => {
            const response = await request(app).get('/time');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('currentTime');
            expect(new Date(response.body.currentTime)).toBeInstanceOf(Date);
        });
    })
})