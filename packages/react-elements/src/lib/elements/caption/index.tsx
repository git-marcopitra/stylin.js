import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CaptionElementProps, CaptionProps } from './caption.types';

export const Caption = forwardRef<PropsWithChildren<CaptionProps>>(
  (props, ref) => {
    const CaptionElement = stylin<
      CaptionElementProps & RefAttributes<CaptionElementProps>
    >('caption')();

    return <CaptionElement {...props} ref={ref} />;
  }
);

Caption.displayName = 'Caption';

export * from './caption.types';
