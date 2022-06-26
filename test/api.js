const { expect } = require('chai');
const chai = require('chai');
const request = require('supertest');
// const pet = require('./fixtures/petDetails.json');
import { params } from './fixtures/petData.js'
chai.should();

/**
 * API tests
 */
describe('REST Pet API Tests', () => {
    let petId, baseUrl;
    let randomNum;
    const min = Math.ceil(11111);
    const max = Math.floor(99999);
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    before('Hooks - Set Base URL and Generate random Pet ID', async () => {
        // runs once before the first test in this block
        baseUrl = params.petApiBaseUrl;
        // Update Pet ID before calling Post
        petId = randomNum;
        params.petObj.id = randomNum;
        console.log(`Base URL -${baseUrl} and Pet-ID is ${petId}`);
    });

    it('Creates a new PET', (done) => {
        console.log(`Posted Pet ID is :- ${petId}`);

        request(baseUrl)
            .post('/pet')
            .send(params.petObj)
            // .set('Authorization', global.bearerToken)
            .expect((res) => {
                console.log(`POST Response is - ${JSON.stringify(res.body)}`);
                // console.log(`Name Value is - ${res.body["name"]}`);
                // console.log(`Category Value is - ${res.body["category"].name}`);
                res.status.should.equal(200);
                expect(res.body["name"]).to.equal(params.petObj.name);
                expect(res.body["category"].name).to.equal(params.petObj.category.name);
            })
            .end(done);
    });

    it(`Updates the Pet with ID - ${randomNum}`, (done) => {
        // Update Pet Category & status in PUT Req
        params.petObj.category.name = "I'm A Popular Australian Bird !!!";
        params.petObj.status = "Over the Horizon";

        console.log(`Updating Pet ID is :- ${petId}`);
        request(baseUrl)
            .put('/pet')
            .send(params.petObj)
            // .set('Authorization', global.bearerToken)
            .expect((res) => {
                console.log(`PUT Response is - ${JSON.stringify(res.body)}`)
                res.status.should.equal(200);
                expect(res.body["name"]).to.equal(params.petObj.name);
                expect(res.body["category"].name).to.equal(params.petObj.category.name);
            })
            .end(done);
    });

    it(`Retrieve Pet with ID - ${randomNum}`, (done) => {
        request(baseUrl)
            .get(`/pet/${petId}`)
            // .set('Authorization', global.bearerToken)
            .expect((res) => {
                console.log(`GET API Response is - ${JSON.stringify(res.body)}`)
                res.status.should.equal(200);
                expect(res.body["name"]).to.equal(params.petObj.name);
                expect(res.body["category"].name).to.equal(params.petObj.category.name);
                expect(res.body["status"]).to.equal(params.petObj.status);
            })
            .end(done);
    });

});