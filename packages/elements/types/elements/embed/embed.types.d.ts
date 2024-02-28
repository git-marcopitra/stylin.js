import { StylinComponentProps } from '@stylin.js/react';
import { EmbedHTMLAttributes } from 'react';
export type EmbedElementProps = Omit<EmbedHTMLAttributes<HTMLEmbedElement>, 'color' | 'translate' | 'width' | 'height'>;
export interface EmbedProps extends StylinComponentProps, EmbedElementProps {
}
