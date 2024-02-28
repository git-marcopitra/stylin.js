import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import stylin, { StylinComponentProps } from '@stylin.js/react';

export interface BoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'translate'> {
  as?: keyof JSX.IntrinsicElements;
}

const Box: FC<PropsWithChildren<BoxProps & StylinComponentProps>> = ({ as, ...props }) => {
  const StylinBox = stylin(as || 'div')();

  return <StylinBox {...props} />;
};

export default Box;
