class Installed {
  getTab() {
    return cy.get('span[class*="RawButton"]');
  }
  getPanel() {
    return cy.get('div[class*="Panel"]');
  }
  getPopupButton() {
    return cy.get('div[class*="Footerstyles__ChildWrapper"]');
  }
  getButton() {
    return 'button[class*="Button"]';
  }

  static getInstalledObject() {
    return new Installed();
  }
}

export default Installed;
