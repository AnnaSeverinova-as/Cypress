/// <reference types="Cypress" />

const user = {
    first_name: "First name",
    last_name: "Last name",
    email: "email@test.com",
    comment: "Text test comment"
  
  }
  
  const userWithoutEmail = {
    first_name: "First name",
    last_name: "Last name",
    comment: "Text test comment"
  
  }


 export const users = [{
    testName: "All valid fileds",
    first_name: "First name",
    last_name: "Last name",
    email: "email@test.com",
    comment: "Text test comment"
  },
  {
    testName: "Empty email",
    first_name: "First name",
    last_name: "Last name",
    comment: "Text test comment"
  },
  {
    testName: "Empty First Name",
    last_name: "Last name",
    email: "email@test.com",
    comment: "Text test comment"
  }]