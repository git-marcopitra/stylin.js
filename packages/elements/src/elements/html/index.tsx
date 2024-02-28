import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HtmlElementProps, HtmlProps } from './html.types';

export const stylinHtml = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & HtmlElementProps & RefAttributes<HtmlElementProps>>('html')(
    ...styles
  );

const HtmlElement = stylinHtml();

export const Html = forwardRef<PropsWithChildren<HtmlProps>>((props, ref) => (
  <HtmlElement {...props} ref={ref} />
));

Html.displayName = 'Html';

export * from './html.types';
