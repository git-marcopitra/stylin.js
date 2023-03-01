import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';
import stylin, { StylinCustomPropertiesType } from '@stylin.js/react';

export interface AnchorProps
  extends CSSProperties,
  Partial<Record<StylinCustomPropertiesType, string>>,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color' | 'translate'> { }

const Anchor = stylin<AnchorProps>('a')();

export default Anchor;
