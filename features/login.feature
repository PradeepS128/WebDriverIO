Feature: Test Login functionality

Scenario: Check login with valid credentials
  Given User is on the homepage
  When User enters valid username and password
  And Clicks on login button
  Then User should be logged in successfully
