import { FrbbyPage } from './app.po';

describe('frbby App', () => {
  let page: FrbbyPage;

  beforeEach(() => {
    page = new FrbbyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
