import { CSSProperties, FC, HTMLAttributes } from 'react';
import stylin from 'stylin.js';
import { StylinCustomPropertiesType } from 'stylin.js/dist/lib/constants';

export interface TypographyProps
  extends CSSProperties,
    Partial<Record<StylinCustomPropertiesType, string>>,
    Omit<HTMLAttributes<HTMLParagraphElement>, 'color' | 'translate'> {
  as?: keyof JSX.IntrinsicElements;
}

const Typography: FC<TypographyProps> = ({ as, ...props }) => {
  const StylinTypography = stylin(as || 'p')();

  return <StylinTypography {...props} />;
};

export default Typography;
