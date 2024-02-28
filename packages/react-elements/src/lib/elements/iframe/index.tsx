import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { IframeElementProps, IframeProps } from './iframe.types';

const IframeElement = stylin<
  IframeElementProps & RefAttributes<IframeElementProps>
>('iframe')();

export const Iframe = forwardRef<PropsWithChildren<IframeProps>>(
  (props, ref) => <IframeElement {...props} ref={ref} />
);

Iframe.displayName = 'Iframe';

export * from './iframe.types';
