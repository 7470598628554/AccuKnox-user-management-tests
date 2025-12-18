const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { UserManagementPage } = require('../pages/UserManagementPage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  const login = new LoginPage(page);
  await login.login('Admin', 'admin123');
});

test('Navigate to Admin Module', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.navigateToAdmin();
  await expect(page).toHaveURL(/admin/);
});

test('Add New User – Invalid Employee Name', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const users = new UserManagementPage(page);

  await dashboard.navigateToAdmin();
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.locator('text=Invalid')).toBeVisible();
});

test('Search Newly Created User – No Records Found', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const users = new UserManagementPage(page);

  await dashboard.navigateToAdmin();
  await users.searchUser('testUserXYZ');
  await expect(users.noRecordsFound).toBeVisible();
});

test('Search Existing User – No Records Found', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const users = new UserManagementPage(page);

  await dashboard.navigateToAdmin();
  await users.searchUser('Admin');
  await expect(users.noRecordsFound).toBeVisible();
});

test('Edit Existing User Details', async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.navigateToAdmin();
  await page.locator('i.bi-pencil-fill').first().click();

  await page.getByLabel('Change Password').check();
  await page.getByLabel('Password').fill('Test@1234');
  await page.getByLabel('Confirm Password').fill('Test@1234');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('Delete Existing User', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  const users = new UserManagementPage(page);

  await dashboard.navigateToAdmin();
  await page.locator('i.bi-trash').first().click();
  await users.confirmDelete.click();

  await expect(page.locator('text=Successfully Deleted')).toBeVisible();
});
