import { ConversAppPage } from './app.po';

describe('convers-app App', function() {
  let page: ConversAppPage;

  beforeEach(() => {
    page = new ConversAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
