import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FooterElementProps, FooterProps } from './footer.types';

export const stylinFooter = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & FooterElementProps & RefAttributes<FooterElementProps>>('footer')(
    ...styles
  );

const FooterElement = stylinFooter();

export const Footer = forwardRef<FooterElementProps, PropsWithChildren<FooterProps>>(
  (props, ref) => <FooterElement {...props} ref={ref} />
);

Footer.displayName = 'Footer';

export * from './footer.types';
