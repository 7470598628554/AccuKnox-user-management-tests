# AccuKnox User Management Automation Tests

## Application Under Test
OrangeHRM Demo  
https://opensource-demo.orangehrmlive.com

## Tech Stack
- Playwright
- JavaScript
- Node.js

## Playwright Version
@playwright/test ^1.42.0

## Project Structure
- pages/ → Page Object Model files
- tests/ → Test scripts
- package.json → Dependencies and scripts

## How to Run Tests
1. Clone the repository
2. Run `npm install`
3. Run `npx playwright test`

## Test Scenarios Automated
- Login to application
- Navigate to Admin Module
- Search user validation (No Records Found)

## Known Issues Observed
- Invalid Employee Name while adding a new user
- Search returns "No Records Found" for existing users
