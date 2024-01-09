/// <reference types="cypress" />

import UserApi from '../endpoints/UserApi';

it("SignUp_Test_Case" , () => {

    let token;

    UserApi.SignUp()
    .then((respone) => {
                token = respone.body.token;
                expect(respone.status).to.eq(200);
                cy.log(token);
        }) 
})