import { PciStandupAPage } from './app.po';

describe('pci-standup-a App', () => {
  let page: PciStandupAPage;

  beforeEach(() => {
    page = new PciStandupAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
