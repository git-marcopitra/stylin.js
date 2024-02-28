import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CiteElementProps, CiteProps } from './cite.types';

const CiteElement = stylin<CiteElementProps & RefAttributes<CiteElementProps>>(
  'cite'
)();

export const Cite = forwardRef<PropsWithChildren<CiteProps>>((props, ref) => (
  <CiteElement {...props} ref={ref} />
));

Cite.displayName = 'Cite';

export * from './cite.types';
