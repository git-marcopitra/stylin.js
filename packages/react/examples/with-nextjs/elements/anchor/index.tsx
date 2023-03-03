import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';
import stylin, { StylinComponentProps, StylinCustomPropertiesType } from '@stylin.js/react';

export interface AnchorProps
  extends StylinComponentProps<
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color' | 'translate'>> { }

const Anchor = stylin<AnchorProps>('a')();

export default Anchor;
