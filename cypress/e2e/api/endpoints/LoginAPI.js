class LoginAPI{

    static Login(){
        return  cy.request({
            method:'POST',
            url:'/api/Accounts/Login',
            body:{
                email: "test1@test.com",
                password: "Test@@123"
            }
            })
    }
}

export default LoginAPI;
