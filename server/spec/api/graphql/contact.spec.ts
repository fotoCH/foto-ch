import * as request from 'supertest';
import * as app from '../../../src/app';

describe('GraphQL Api', () => {
  it('lists all contacts', async () => {
    const contacts = [
      { id: 0, tel: '0512222222', email: 'gu@mail.com', 
       contactType: 1, name: 'Bruce Willis' }
    ];

    const query = {
      query: `
        query {
          contacts {
            id name tel email contactType
          }
        }
      `
    };

    const response = await request(app.callback())
      .post('/graphql')
      .send(query);

    expect(response.status).toBe(200);
    expect(response.body.data.contacts).toEqual(contacts);
  });
});
