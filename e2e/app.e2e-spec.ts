import { PikapediaPage } from './app.po';

describe('pikapedia App', () => {
  let page: PikapediaPage;

  beforeEach(() => {
    page = new PikapediaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
