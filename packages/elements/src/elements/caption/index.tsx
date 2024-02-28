import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CaptionElementProps, CaptionProps } from './caption.types';

export const stylinCaption = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & CaptionElementProps & RefAttributes<CaptionElementProps>>(
    'caption'
  )(...styles);

const CaptionElement = stylinCaption();

export const Caption = forwardRef<CaptionElementProps, PropsWithChildren<CaptionProps>>(
  (props, ref) => <CaptionElement {...props} ref={ref} />
);

Caption.displayName = 'Caption';

export * from './caption.types';
