import { FAVICON_URL } from '@utils/constants';
import Html from '@client/Html';

const props = {
  body: '<span>bruh</span>',
  styles: '<style></style>',
  title: 'bruh momentum',
  preloadedState: {},
};

const output = Html(props);

describe('Html', () => {
  test('is not null', () => {
    expect(output).not.toBeNull();
  });

  test('contains favicon', () => {
    expect(output).toMatch(FAVICON_URL);
  });

  test('contains body', () => {
    expect(output).toMatch(props.body);
  });

  test('contains styles', () => {
    expect(output).toMatch(props.styles);
  });

  test('contains title', () => {
    expect(output).toMatch(props.title);
  });

  test('contains preloadedState', () => {
    expect(output).toMatch(
      JSON.stringify(props.preloadedState),
    );
  });
});
