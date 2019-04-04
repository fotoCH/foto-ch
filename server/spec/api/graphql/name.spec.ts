import * as request from 'supertest';
import * as app from '../../../src/app';

describe('GraphQL Api', () => {
  it('lists all persons', async () => {
    const names = [
      { id: 0, firstname: 'Hans', lastname: 'Müller' }
    ];

    const query = {
      query: `
        query {
          names {
            id person_id firstname lastname title addition
          }
        }
      `
    };

    const response = await request(app.callback())
      .post('/graphql')
      .send(query);

    expect(response.status).toBe(200);
    expect(response.body.data.names).toEqual(names);
  });
});
