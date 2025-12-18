class UserManagementPage {
  constructor(page) {
    this.page = page;

    this.addButton = page.getByRole('button', { name: 'Add' });
    this.usernameSearch = page.locator('//label[text()="Username"]/../following-sibling::div/input');
    this.searchButton = page.getByRole('button', { name: 'Search' });

    this.invalidEmployeeError = page.locator('text=Invalid');
    this.noRecordsFound = page.locator('text=No Records Found');

    this.deleteButton = page.getByRole('button', { name: 'Delete' });
    this.confirmDelete = page.getByRole('button', { name: 'Yes, Delete' });
  }

  async searchUser(username) {
    await this.usernameSearch.waitFor({ state: 'visible' });
    await this.usernameSearch.fill(username);
    await this.searchButton.click();
  }
}

module.exports = { UserManagementPage };
