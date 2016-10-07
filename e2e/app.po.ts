export class Angular2test2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2test2-app h1')).getText();
  }
}
