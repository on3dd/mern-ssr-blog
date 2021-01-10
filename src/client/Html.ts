import { FAVICON_URL } from '@utils/constants';

type HtmlProps = {
  body: string;
  styles: string;
  title: string;
  preloadedState: unknown;
};

const Html = ({
  body,
  styles,
  title,
  preloadedState,
}: HtmlProps) => `
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <title>${title}</title>
      <link rel="icon" href="${FAVICON_URL}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${styles}
    </head>
    <body>
      <div id="root">${body}</div>
      <!-- <script src="./client.bundle.js"></script> -->
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(
            preloadedState,
          ).replace(/</g, '\\u003c')}
        </script>
    </body>
  </html>
`;

export default Html;
