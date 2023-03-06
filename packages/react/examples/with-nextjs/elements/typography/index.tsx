import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import stylin, { StylinComponentProps } from '@stylin.js/react';

export interface TypographyProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color' | 'translate'> {
  as?: keyof JSX.IntrinsicElements;
}

const Typography: FC<PropsWithChildren<TypographyProps & StylinComponentProps>> = ({ as, ...props }) => {
  const StylinTypography = stylin<TypographyProps>(as || 'p')();

  return <StylinTypography {...props} />;
};

export default Typography;
