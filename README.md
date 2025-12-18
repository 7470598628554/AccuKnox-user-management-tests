# AccuKnox User Management Automation Tests

## Application Under Test
OrangeHRM Demo  
https://opensource-demo.orangehrmlive.com

## Credentials
Username: Admin  
Password: admin123

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

## Test Coverage
- Login to application
- Navigate to Admin module
- User search validation
- Handling "No Records Found" scenario

## Known Issues Observed
- Invalid Employee Name error while adding a new user
- Searching newly created or existing users sometimes returns "No Records Found"
