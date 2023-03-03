import { CSSProperties, FC, HTMLAttributes } from 'react';
import stylin, { StylinComponentProps, StylinCustomPropertiesType } from '@stylin.js/react';

export interface BoxProps
  extends StylinComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'translate'>> {
  as?: keyof JSX.IntrinsicElements;
}

const Box: FC<BoxProps> = ({ as, ...props }) => {
  const StylinBox = stylin(as || 'div')();

  return <StylinBox {...props} />;
};

export default Box;
