import * as request from 'supertest';
import * as app from '../../../src/app';

describe('GraphQL Api', () => {
  it('lists all photographers', async () => {
    const photographers = [
      { id: 0, firstname: 'Jakob', lastname: 'Hunziker' },
      { id: 1, firstname: 'Paul', lastname: 'Senn' },
      { id: 2, firstname: 'Jules', lastname: 'Beck' }
    ];

    const query = {
      query: `
        query {
          photographers {
            id firstname lastname
          }
        }
      `
    };

    const response = await request(app.callback())
      .post('/graphql')
      .send(query);

    expect(response.status).toBe(200);
    expect(response.body.data.photographers).toEqual(photographers);
  });
});
