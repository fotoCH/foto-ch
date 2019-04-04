import * as request from 'supertest';
import * as app from '../../../src/app';

describe('GraphQL Api', () => {
  it('lists all persons', async () => {
    const persons = [
      { id: 0, awards: 'Some Award', short_bio: 'qxample@mail.com' },
      { id: 1, awards: 'Some Award', short_bio: 'wxample@mail.com' },
      { id: 2, awards: 'Some Award', short_bio: 'example@mail.com' }
    ];

    const query = {
      query: `
        query {
          persons {
            id names awards short_bio
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
