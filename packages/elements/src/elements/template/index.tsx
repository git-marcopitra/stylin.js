import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TemplateElementProps, TemplateProps } from './template.types';

export const stylinTemplate = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TemplateElementProps & RefAttributes<TemplateElementProps>>(
    'template'
  )(...styles);

const TemplateElement = stylinTemplate();

export const Template = forwardRef<TemplateElementProps, PropsWithChildren<TemplateProps>>(
  (props, ref) => <TemplateElement {...props} ref={ref} />
);

Template.displayName = 'Template';

export * from './template.types';
