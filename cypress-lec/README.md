## cypress testing

1.npm i cypress

2"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"cypress": "cypress open"
},

3.npm run cypress

4. There are two options available : E2E and components

5.Choose E2E tesing

5. Click on continue

6. Electron comes with cypress , choose any browser

7. click --> `Start e2e testing `

8. click --> `create new spec file `

9. Rename the file with extension--> cy.js

10. Click -->OK run the spec

//create counter app

// If you dont want to use react-app
-npm init-y
-npm i cypess

-Follow the same steps

methods : data-testid, className, id,tag,text,
// we are writing cy.vist after every test case,
instead of that we can use : //beforeEach(HOF)
//afterEach (HOF)
//afterAll(HOF)
//beforeAll(HOF)

beforeEach(() => {
cy.visit("http://localhost:3000");
});

// hidden elements can be accessed via : cy.get('.hidden').click({ force: true })

// .eq(1) -> to select the element in array of elements returned in class
//data-testid
//className
//id
//tag/element
//text  
//mocking function
//interceptors -->intercepting request
