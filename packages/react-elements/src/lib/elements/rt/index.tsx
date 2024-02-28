import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RtElementProps, RtProps } from './rt.types';

export const stylinRt = stylin<RtElementProps & RefAttributes<RtElementProps>>(
  'rt'
);

const RtElement = stylinRt();

export const Rt = forwardRef<PropsWithChildren<RtProps>>((props, ref) => (
  <RtElement {...props} ref={ref} />
));

Rt.displayName = 'Rt';

export * from './rt.types';
