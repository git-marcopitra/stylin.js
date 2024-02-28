import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { IframeElementProps, IframeProps } from './iframe.types';

export const stylinIframe = stylin<
  IframeElementProps & RefAttributes<IframeElementProps>
>('iframe');

const IframeElement = stylinIframe();

export const Iframe = forwardRef<PropsWithChildren<IframeProps>>(
  (props, ref) => <IframeElement {...props} ref={ref} />
);

Iframe.displayName = 'Iframe';

export * from './iframe.types';
