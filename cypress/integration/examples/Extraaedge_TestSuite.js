
///<reference types="cypress"/>
describe('Extraaedge_TestSuite', function() 
{
    it('Step 1 and 4 form fields', function()
    
    {
        
        cy.visit('https://appform-staging.extraaedge.com/?prn=wnoxfz&inst=18')
        cy.wait(9000)
        cy.get("#btncontinue").click()
        cy.wait(3000)
        cy.get('#preferCentre').click()
        cy.get('#react-select-2-input').type('Field5C')
        
        cy.get('#entity2Id').click()
        cy.get('#react-select-3-input').type('Test 02')
        
        cy.get('#entity3Id').click()
        cy.get('#react-select-4-input').type('Entity3-Test 02')
        cy.get('#dateOfBirth').clear()
        cy.wait(900)
        cy.get('#dateOfBirth').type('11-9-1992')

        cy.get('#alternateMobileNumber').clear()
        cy.wait(900)
        cy.get('#alternateMobileNumber').type('9527584305')

        cy.get('#landlineNumber').clear()
        cy.wait(900)
        cy.get('#landlineNumber').type('020221212')

        cy.get('#alternateEmailAddress').clear()
        cy.wait(900)
        cy.get('#alternateEmailAddress').type('Testing1@gmail.com')

        cy.get('[for=gender-M]').click()

        cy.get('#permenentCountry').click()
        cy.get('#react-select-7-input').type('India')

        cy.get('#permenentState').click()
        cy.get('#react-select-8-input').type('Maharashtra')
        cy.wait(900)
        cy.get('#permenentCity').click()
        cy.get('#react-select-9-input').type('Pune')

        cy.get('#permenentAddressLine1').clear()
        cy.wait(900)
        cy.get('#permenentAddressLine1').type('Baner, Pune')


        cy.get('#permenentPincode').clear()
        cy.wait(900)
        cy.get('#permenentPincode').type('400097')

        cy.get('[for=isSamePresentAddress]').click()
        cy.wait(500)

        cy.get('#submit').click()
        cy.wait(5000)


        cy.get('#submit').click()
        cy.wait(5000)

        cy.get('#submit').click()
        cy.wait(5000)

        cy.get('#preview').click()
        cy.wait(1000)
        
    })
    
    
   
  })