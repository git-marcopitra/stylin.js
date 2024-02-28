import { StylinComponentProps } from '@stylin.js/react';
import { ImgHTMLAttributes } from 'react';
export type ImgElementProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'translate' | 'height' | 'width'>;
export interface ImgProps extends StylinComponentProps, ImgElementProps {
}
