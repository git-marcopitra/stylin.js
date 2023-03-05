import type { AriaAttributes, FC, PropsWithChildren } from 'react';
import stylin from '@stylin.js/react';

export type TypographyProps = PropsWithChildren<AriaAttributes & {
  as?: keyof JSX.IntrinsicElements;
}>;

const Typography: FC<TypographyProps> = ({ as, ...props }) => {
  const StylinTypography = stylin<TypographyProps>(as || 'p')();

  return <StylinTypography {...props} />;
};

export default Typography;
