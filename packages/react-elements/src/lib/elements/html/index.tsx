import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HtmlElementProps, HtmlProps } from './html.types';

const HtmlElement = stylin<HtmlElementProps & RefAttributes<HtmlElementProps>>(
  'html'
)();

export const Html = forwardRef<PropsWithChildren<HtmlProps>>((props, ref) => (
  <HtmlElement {...props} ref={ref} />
));

Html.displayName = 'Html';

export * from './html.types';
