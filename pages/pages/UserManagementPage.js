class UserManagementPage {
  constructor(page) {
    this.page = page;
    this.usernameSearch =
      page.locator('//label[text()="Username"]/../following-sibling::div/input');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.noRecordsFound = page.locator('text=No Records Found');
  }

  async searchUser(username) {
    await this.usernameSearch.fill(username);
    await this.searchButton.click();
  }
}

module.exports = { UserManagementPage };

