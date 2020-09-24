import { faviconUrl } from '../utils/constants';

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
      <link rel="icon" href="${faviconUrl}" />
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default Html;
