import {
  mapSectionContent,
  mapSectionTwoColumns,
  mapTextGrid,
  mapImageGrid,
  mapSections,
} from './map-sections';

import fakeData from './dados.json';

describe('map-sections', () => {
  it('should map sections if there is no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('should map sections', () => {
    const data = mapSections(fakeData.data[0].attributes.sections);
    expect(data[0].__component).toBe('section.section-two-columns');
  });
  it('should map section two columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.imgSrc).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description: 'test',
      image: {
        data: {
          id: 1,
          attributes: {
            name: 'backstrapi.svg',
            alternativeText: null,
            caption: null,
            width: 1030,
            height: 730,
            formats: null,
            hash: 'backstrapi_3e90d534e1',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'a.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'backstrapi_3e90d534e1',
              resource_type: 'image',
            },
            createdAt: '2023-05-05T20:28:57.066Z',
            updatedAt: '2023-05-05T20:28:57.066Z',
          },
        },
      },
      metadata: {
        id: 1,
        name: 'home',
        section_id: 'home',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
    expect(data.text).toBe('test');
    expect(data.imgSrc).toBe('a.svg');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });
  it('should map section content without data', () => {
    const data = mapSectionContent();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map section content', () => {
    const data = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content: '<p>ola</p>',
      metadata: {
        id: 3,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
    expect(data.html).toBe('<p>ola</p>');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });
  it('should map section grid text without data', () => {
    const data = mapTextGrid();
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map section grid text', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.',
      metadata: {
        id: 2,
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description: 'descricao',
        },
      ],
      image_grid: [],
    });
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('MY GRID');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('descricao');
  });
  it('should map section grid image without data', () => {
    const data = mapImageGrid();
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map section grid image', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('abc');
    expect(data.grid[0].imgSrc).toBe('a.svg');
  });
});
