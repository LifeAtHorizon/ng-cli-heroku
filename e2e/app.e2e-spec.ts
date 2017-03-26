import { NgCliHerokuPage } from './app.po';

describe('ng-cli-heroku App', () => {
  let page: NgCliHerokuPage;

  beforeEach(() => {
    page = new NgCliHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
