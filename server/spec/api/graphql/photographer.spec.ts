import * as request from 'supertest';
import * as app from '../../../src/app';

describe('GraphQL Api', () => {
  it('lists all photographers', async () => {
    const photographers = [
      { id: 0, tel: '0512222222', email: 'gu@mail.com', 
       photographerType: 1, genreTypes: '1;6' }
    ];

    const query = {
      query: `
        query {
          photographers {
            id tel email photographerType genreTypes
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
