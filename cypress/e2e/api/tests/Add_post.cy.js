
import LoginAPI from "../endpoints/LoginAPI";
import AddPostAPI from "../endpoints/AddPosAPI";

describe('login API', ()=>{
    let token;
    
    beforeEach(()=>{
        LoginAPI.Login().then(response =>{
        token= response.body.token;
        cy.log(token)
    });
});



    it("Add post",()=>{
      AddPostAPI.AddPost(token)
      })

    })

    