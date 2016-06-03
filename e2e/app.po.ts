export class Angular2HelloworldPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-helloworld-app h1')).getText();
  }
}
