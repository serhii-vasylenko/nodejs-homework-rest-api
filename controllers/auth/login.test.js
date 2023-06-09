const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');

require('dotenv').config();

const { DB_HOST, EMAIL, PASSWORD } = process.env;
const creds = {
  email: EMAIL,
  password: PASSWORD,
};

beforeAll(async () => {
  await mongoose.connect(DB_HOST);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /api/users/login', () => {
  it('should return code 200', async () => {
    const res = await request(app).post('/api/users/login').send(creds);

    expect(res.statusCode).toBe(200);
  });
  it('resonse returns token', async () => {
    const res = await request(app).post('/api/users/login').send(creds);
    expect(JSON.parse(res.text).token).toBeTruthy();
  });
  it('user is object', async () => {
    const res = await request(app).post('/api/users/login').send(creds);
    const user = JSON.parse(res.text).user;

    expect(typeof user).toBe('object');
  });

  it('subscription and email should be string', async () => {
    const res = await request(app).post('/api/users/login').send(creds);
    const { email, subscription } = JSON.parse(res.text).user;

    expect(typeof subscription).toBe('string');
    expect(typeof email).toBe('string');
  });
});
