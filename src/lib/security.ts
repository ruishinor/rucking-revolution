import sanitizeHtml from 'sanitize-html';

const allowedTags = [
  ...sanitizeHtml.defaults.allowedTags,
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'img',
  'pre',
  'code',
  'blockquote',
  'hr',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td',
];

const allowedAttributes: Record<string, string[]> = {
  ...sanitizeHtml.defaults.allowedAttributes,
  a: ['href', 'name', 'target', 'rel'],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
  code: ['class'],
  pre: ['class'],
  th: ['colspan', 'rowspan', 'scope'],
  td: ['colspan', 'rowspan'],
};

export function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags,
    allowedAttributes,
    allowedSchemes: ['http', 'https', 'mailto'],
    allowProtocolRelative: false,
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', {
        rel: 'noopener noreferrer',
      }),
      img: (tagName: string, attribs: Record<string, string>) => ({
        tagName,
        attribs: {
          ...attribs,
          loading: attribs.loading ?? 'lazy',
          decoding: attribs.decoding ?? 'async',
        },
      }),
    },
  });
}
