import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';
import stylin, { StylinCustomPropertiesType } from 'stylin.js';

export interface AnchorProps
  extends CSSProperties,
    Partial<Record<StylinCustomPropertiesType, string>>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color' | 'translate'> {}

const Anchor: FC<AnchorProps> = stylin('a')();

export default Anchor;
