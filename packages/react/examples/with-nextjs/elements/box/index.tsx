import { CSSProperties, FC, HTMLAttributes } from 'react';
import stylin, { StylinCustomPropertiesType } from 'stylin.js';

export interface BoxProps
  extends CSSProperties,
    Partial<Record<StylinCustomPropertiesType, string>>,
    Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'translate'> {
  as?: keyof JSX.IntrinsicElements;
}

const Box: FC<BoxProps> = ({ as, ...props }) => {
  const StylinBox = stylin(as || 'div')();

  return <StylinBox {...props} />;
};

export default Box;
