import { Angular2test2Page } from './app.po';

describe('angular2test2 App', function() {
  let page: Angular2test2Page;

  beforeEach(() => {
    page = new Angular2test2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2test2 works!');
  });
});
