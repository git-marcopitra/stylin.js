import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RtElementProps, RtProps } from './rt.types';

const RtElement = stylin<RtElementProps & RefAttributes<RtElementProps>>(
  'rt'
)();

export const Rt = forwardRef<PropsWithChildren<RtProps>>((props, ref) => (
  <RtElement {...props} ref={ref} />
));

Rt.displayName = 'Rt';

export * from './rt.types';
