import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavigationList() {
    return element.all(by.css('ul li a'));
  }
}
