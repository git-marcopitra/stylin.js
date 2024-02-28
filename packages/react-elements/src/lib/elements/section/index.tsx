import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SectionElementProps, SectionProps } from './section.types';

const SectionElement = stylin<
  SectionElementProps & RefAttributes<SectionElementProps>
>('section')();

export const Section = forwardRef<PropsWithChildren<SectionProps>>(
  (props, ref) => <SectionElement {...props} ref={ref} />
);

Section.displayName = 'Section';

export * from './section.types';
