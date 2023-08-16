import { mapData } from './map-data';

describe('Map data', () => {
  it('should map footer_text, slug and title even without data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });
  it('should map footer_text, slug and title if there is data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Ola</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Ola</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
