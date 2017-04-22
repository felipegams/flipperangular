import { FlipperangularPage } from './app.po';

describe('flipperangular App', () => {
  let page: FlipperangularPage;

  beforeEach(() => {
    page = new FlipperangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
