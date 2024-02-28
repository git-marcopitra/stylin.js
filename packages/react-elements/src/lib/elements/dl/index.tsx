import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DlElementProps, DlProps } from './dl.types';

export const stylinDl = stylin<DlElementProps & RefAttributes<DlElementProps>>(
  'dl'
);

const DlElement = stylinDl();

export const Dl = forwardRef<PropsWithChildren<DlProps>>((props, ref) => (
  <DlElement {...props} ref={ref} />
));

Dl.displayName = 'Dl';

export * from './dl.types';
