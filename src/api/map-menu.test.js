import { mapMenu } from './map-menu';

describe('menu-data', () => {
  it('should return a predefined object if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.link).toBe('');
    expect(menu.imgSrc).toBe('');
  });
  it('should map the menu with the required values', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing page',
      logo_link: '#landing',
      logo: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
      menu_links: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing page');
    expect(menu.link).toBe('#landing');
    expect(menu.imgSrc).toBe('a.svg');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });
});
