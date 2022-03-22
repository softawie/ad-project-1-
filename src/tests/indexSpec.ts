import supertest from 'supertest';

import { app as APP } from '../index';

const req = supertest(APP);

describe("test  images route",()=>{
    it("if gave  the route then and request it return 400",async()=>{
        await req.get("/images").expect(400);
    })
    it("if gave  the route then and request it return 404",async()=>{
        await req.get("/api/images?filename=blabla..").expect(404);
    })
    
})

