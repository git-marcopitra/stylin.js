import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TemplateElementProps, TemplateProps } from './template.types';

export const stylinTemplate = stylin<
  TemplateElementProps & RefAttributes<TemplateElementProps>
>('template');

const TemplateElement = stylinTemplate();

export const Template = forwardRef<PropsWithChildren<TemplateProps>>(
  (props, ref) => <TemplateElement {...props} ref={ref} />
);

Template.displayName = 'Template';

export * from './template.types';
