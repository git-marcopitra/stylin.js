import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CiteElementProps, CiteProps } from './cite.types';

export const Cite = forwardRef<PropsWithChildren<CiteProps>>((props, ref) => {
  const CiteElement = stylin<
    CiteElementProps & RefAttributes<CiteElementProps>
  >('cite')();

  return <CiteElement {...props} ref={ref} />;
});

Cite.displayName = 'Cite';

export * from './cite.types';
