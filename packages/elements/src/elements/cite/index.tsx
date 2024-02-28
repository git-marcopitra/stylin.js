import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CiteElementProps, CiteProps } from './cite.types';

export const stylinCite = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & CiteElementProps & RefAttributes<CiteElementProps>>('cite')(
    ...styles
  );

const CiteElement = stylinCite();

export const Cite = forwardRef<PropsWithChildren<CiteProps>>((props, ref) => (
  <CiteElement {...props} ref={ref} />
));

Cite.displayName = 'Cite';

export * from './cite.types';
