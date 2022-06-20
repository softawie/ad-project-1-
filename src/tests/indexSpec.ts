import supertest from 'supertest'

import { app as APP } from '../index'

const req = supertest(APP)

describe('test  images route', () => {
  it('if gave  the route  and request it return 200 ', async () => {
    await req.get('/api').expect(200)
  })
  it('if gave  the route  and request it return 200 that mean list ok', async () => {
    await req.get('/api/list').expect(200)
  })
  it('if gave  the route  and request it return 200 mean test image ok', async () => {
    await req.get('/api/thump/images?filename=fjord.jpg&width=800&height=900').expect(200)
  })
})
