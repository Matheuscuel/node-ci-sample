import request from 'supertest';
import app from '../src/app.js';

describe('App basic endpoints', () => {
  it('GET / should return Hello CI', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello CI');
  });

  it('GET /health should return ok:true json', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
