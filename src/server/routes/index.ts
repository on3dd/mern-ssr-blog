import { Router } from 'express';

import ApiRouter from '@server/routes/api';
import generateHtmlContent from '@server/utils/generateHtmlContent';

import App from '@client/App.tsx';
import Html from '@client/Html.ts';

const router = Router();

router.use('/api', ApiRouter);

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
