import * as request from 'supertest';
import * as app from '../../../src/app';

describe('GraphQL Api', () => {
  it('lists all persons', async () => {
    const persons = [
      { id: 0, tel: '0212222222', email: 'qxample@mail.com' },
      { id: 1, tel: '0312222222', email: 'wxample@mail.com' },
      { id: 2, tel: '0412222222', email: 'example@mail.com' }
    ];

    const query = {
      query: `
        query {
          persons {
            id names tel email
          }
        }
      `
    };

    const response = await request(app.callback())
      .post('/graphql')
      .send(query);

    expect(response.status).toBe(200);
    expect(response.body.data.persons).toEqual(persons);
  });
});
