import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FooterElementProps, FooterProps } from './footer.types';

export const stylinFooter = stylin<
  FooterElementProps & RefAttributes<FooterElementProps>
>('footer');

const FooterElement = stylinFooter();

export const Footer = forwardRef<PropsWithChildren<FooterProps>>(
  (props, ref) => <FooterElement {...props} ref={ref} />
);

Footer.displayName = 'Footer';

export * from './footer.types';
