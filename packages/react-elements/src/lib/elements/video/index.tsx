import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { VideoElementProps, VideoProps } from './video.types';

export const stylinVideo = stylin<
  VideoElementProps & RefAttributes<VideoElementProps>
>('video');

const VideoElement = stylinVideo();

export const Video = forwardRef<PropsWithChildren<VideoProps>>((props, ref) => (
  <VideoElement {...props} ref={ref} />
));

Video.displayName = 'Video';

export * from './video.types';
