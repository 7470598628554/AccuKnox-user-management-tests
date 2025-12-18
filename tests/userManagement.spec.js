const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { UserManagementPage } = require('../pages/UserManagementPage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const loginPage = new LoginPage(page);
  await loginPage.login('Admin', 'admin123');
});

test('Navigate to Admin Module', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goToAdmin();

  await expect(page).toHaveURL(/admin/);
});

test('Search user shows No Records Found', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const userManagement = new UserManagementPage(page);

  await dashboard.goToAdmin();
  await userManagement.searchUser('invalidTestUser');

  await expect(userManagement.noRecordsText).toBeVisible();
});
