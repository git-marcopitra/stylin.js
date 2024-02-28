import { StylinComponentProps } from '@stylin.js/react';
import { IframeHTMLAttributes } from 'react';
export type IframeElementProps = Omit<IframeHTMLAttributes<HTMLIFrameElement>, 'color' | 'translate' | 'height' | 'width'>;
export interface IframeProps extends StylinComponentProps, IframeElementProps {
}
