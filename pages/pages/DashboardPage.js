class DashboardPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.getByRole('link', { name: 'Admin' });
  }

  async navigateToAdmin() {
    await this.adminMenu.waitFor({ state: 'visible' });
    await this.adminMenu.click();
  }
}

module.exports = { DashboardPage };
