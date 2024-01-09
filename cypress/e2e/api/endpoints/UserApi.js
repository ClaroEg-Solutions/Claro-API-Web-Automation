/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
import GetRandomPhone from '../GetRandom';

class UserApi {
    static SignUp(){
        return cy.request({
            url : "https://api.v1.claro.eg/api/Accounts/Register" , 
            method : "POST" , 
            body : {
                fullname :{
                    firstName : faker.name.firstName() ,
                    lastName : faker.name.lastName() 
                },
                phoneNumber : "+20 11" + GetRandomPhone(8) ,
                email : faker.internet.email()  ,
                password : "Aa@123123" ,
                confirmPassword : "Aa@123123"
            }
        })
    }
}

export default UserApi