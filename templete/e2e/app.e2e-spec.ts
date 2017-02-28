import { TempletePage } from './app.po';

describe('templete App', () => {
  let page: TempletePage;

  beforeEach(() => {
    page = new TempletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
