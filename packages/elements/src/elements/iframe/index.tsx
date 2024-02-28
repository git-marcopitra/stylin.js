import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, RefAttributes } from 'react';

import { IframeElementProps, IframeProps } from './iframe.types';

export const stylinIframe = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & IframeElementProps & RefAttributes<IframeElementProps>>('iframe')(
    ...styles
  );

const IframeElement = stylinIframe();

export const Iframe = forwardRef<IframeElementProps, IframeProps>(
  (props, ref) => <IframeElement {...props} ref={ref} />
);

Iframe.displayName = 'Iframe';

export * from './iframe.types';
