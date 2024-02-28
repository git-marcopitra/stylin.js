import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CaptionElementProps, CaptionProps } from './caption.types';

export const stylinCaption = stylin<
  CaptionElementProps & RefAttributes<CaptionElementProps>
>('caption');

const CaptionElement = stylinCaption();

export const Caption = forwardRef<PropsWithChildren<CaptionProps>>(
  (props, ref) => <CaptionElement {...props} ref={ref} />
);

Caption.displayName = 'Caption';

export * from './caption.types';
