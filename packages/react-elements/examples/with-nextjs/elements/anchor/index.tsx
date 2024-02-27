import { AnchorHTMLAttributes } from 'react';
import stylin, { StylinComponentProps } from '@stylin.js/react';

export interface AnchorProps
  extends 
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color' | 'translate'> { }

const Anchor = stylin<AnchorProps>('a')();

export default Anchor;
