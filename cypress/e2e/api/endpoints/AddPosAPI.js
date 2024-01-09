
class AddPostAPI{
    static AddPost(token){
        cy.fixture('post_body').then(requestBody=>{
           
            cy.request({
                url:'/api/Posts',
                method: 'POST',
                auth: {bearer: token},
                body:  requestBody

        }).then((response)=>{
            expect(response.status).to.eq(200)

            cy.log(response.body.permaKey)
            cy.log(response.body.postId)
        })

    })
}}
export default AddPostAPI;