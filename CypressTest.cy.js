describe('CypressXpath', ()=>{

it('firstXpth',()=>{

cy.visit('https://www.amazon.in/')
cy.get('#twotabsearchtextbox').type('oneplus open')
cy.get('#nav-search-submit-button').click()
cy.get("*").contains('1,39,999')
cy.title('Amazon.in : oneplus open')
})

})
