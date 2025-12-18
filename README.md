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

## Project Setup
1. Clone the repository
2. Run `npm install`
3. Run `npx playwright install`

## How to Run Tests
npx playwright test

## Automation Coverage
- Login to application
- Navigate to Admin Module
- User search validation
- Handling "No Records Found" scenario

## Known Issues Observed
- Invalid Employee Name while adding a new user
- Search returns "No Records Found" for existing users
