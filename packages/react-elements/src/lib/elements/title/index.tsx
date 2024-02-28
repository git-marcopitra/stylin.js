import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TitleElementProps, TitleProps } from './title.types';

export const stylinTitle = stylin<
  TitleElementProps & RefAttributes<TitleElementProps>
>('title');

const TitleElement = stylinTitle();

export const Title = forwardRef<PropsWithChildren<TitleProps>>((props, ref) => (
  <TitleElement {...props} ref={ref} />
));

Title.displayName = 'Title';

export * from './title.types';
