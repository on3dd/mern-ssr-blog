import { FAVICON_URL } from '@utils/constants';

type HtmlProps = {
  body: string;
  styles: string;
  title: string;
};

const Html = ({ body, styles, title }: HtmlProps) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="icon" href="${FAVICON_URL}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;
