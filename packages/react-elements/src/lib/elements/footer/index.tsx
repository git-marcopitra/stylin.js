import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FooterElementProps, FooterProps } from './footer.types';

const FooterElement = stylin<
  FooterElementProps & RefAttributes<FooterElementProps>
>('form')();

export const Footer = forwardRef<PropsWithChildren<FooterProps>>(
  (props, ref) => <FooterElement {...props} ref={ref} />
);

Footer.displayName = 'Footer';

export * from './footer.types';
