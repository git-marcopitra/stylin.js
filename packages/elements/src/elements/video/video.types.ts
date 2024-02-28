import { StylinComponentProps } from '@stylin.js/react';
import { VideoHTMLAttributes } from 'react';

export type VideoElementProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  'color' | 'translate' | 'width' | 'height'
>;

export interface VideoProps extends StylinComponentProps, VideoElementProps {}
