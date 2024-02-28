import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SubElementProps, SubProps } from './sub.types';

export const stylinSub = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SubElementProps & RefAttributes<SubElementProps>>('sub')(
    ...styles
  );

const SubElement = stylinSub();

export const Sub = forwardRef<SubElementProps, PropsWithChildren<SubProps>>((props, ref) => (
  <SubElement {...props} ref={ref} />
));

Sub.displayName = 'Sub';

export * from './sub.types';
