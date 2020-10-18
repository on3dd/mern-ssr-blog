import { Router } from 'express';

import generateHtmlContent from '@server/utils/generateHtmlContent';

import App from '@client/App.tsx';
import Html from '@client/Html.ts';

// Init router and path
const router = Router();

router.get('/*', (req, res) => {
  const context = {};

  const { body, styles } = generateHtmlContent(App, {
    location: req.url,
    context,
  });

  const title = 'Test Server Side Rendering App';

  res.send(
    Html({
      body,
      styles,
      title,
    }),
  );
});

export default router;
