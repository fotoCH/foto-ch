import * as proc from 'process';
import * as request from 'supertest';
import * as app from '../../src/app';

describe('Api', () => {
  it('Info route works', async () => {
    const info = {
      nodeVersion: proc.version,
      nodeEnv: 'test',
      version: '0.0.0'
    };

    const response = await request(app.callback()).get('/info');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(info);
  });
});
