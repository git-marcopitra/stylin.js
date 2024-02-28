import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HtmlElementProps, HtmlProps } from './html.types';

export const stylinHtml = stylin<
  HtmlElementProps & RefAttributes<HtmlElementProps>
>('html');

const HtmlElement = stylinHtml();

export const Html = forwardRef<PropsWithChildren<HtmlProps>>((props, ref) => (
  <HtmlElement {...props} ref={ref} />
));

Html.displayName = 'Html';

export * from './html.types';
