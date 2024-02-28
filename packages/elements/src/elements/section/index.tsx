import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SectionElementProps, SectionProps } from './section.types';

export const stylinSection = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SectionElementProps & RefAttributes<SectionElementProps>>(
    'section'
  )(...styles);

const SectionElement = stylinSection();

export const Section = forwardRef<SectionElementProps, PropsWithChildren<SectionProps>>(
  (props, ref) => <SectionElement {...props} ref={ref} />
);

Section.displayName = 'Section';

export * from './section.types';
