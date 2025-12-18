class UserManagementPage {
  constructor(page) {
    this.page = page;

    this.usernameSearchInput = page.locator(
      '//label[text()="Username"]/../following-sibling::div/input'
    );

    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.noRecordsText = page.locator('text=No Records Found');
  }

  async searchUser(username) {
    await this.usernameSearchInput.fill(username);
    await this.searchButton.click();
  }
}

module.exports = { UserManagementPage };
