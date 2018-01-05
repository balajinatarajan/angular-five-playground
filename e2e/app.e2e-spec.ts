import { AppPage } from './app.po';

describe('angular-five-playground App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    const navList = page.getNavigationList();
    expect(navList.count()).toBe(3);
    expect(navList.first().getText()).toBe('Home');
    expect(navList.get(1).getText()).toBe('About');
    expect(navList.get(2).getText()).toBe('Flow');
  });
});
