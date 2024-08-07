import { Given, When, Then } from "@wdio/cucumber-framework";
const loginpage = require("../pageobjects/loginpage");
const fs = require("fs");


//use copy relative path and add in ' '
let credentials = JSON.parse(fs.readFileSync("features/TestData/login.json"));

credentials.forEach((Credential) => {
  //Credential.username
  // Pass it anywhere

  Given(/^User is on the homepage$/, () => {
    loginpage.title;
  });

  When(/^User enters valid username and password$/, () => {});
  When(/^Clicks on login button$/, () => {});
  Then(/^User should be logged in successfully$/, () => {});
});

// Given(/^User is on the homepage$/, () => {
//   loginpage.title();
// });

// When(/^User enters valid username and password$/, () => {});
// When(/^Clicks on login button$/, () => {});
// Then(/^User should be logged in successfully$/, () => {});

// credentials.forEach((Credential)=>{
//   console.log('Username: {Credential.username}')

// })
