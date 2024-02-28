import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { VideoElementProps, VideoProps } from './video.types';

const VideoElement = stylin<
  VideoElementProps & RefAttributes<VideoElementProps>
>('video')();

export const Video = forwardRef<PropsWithChildren<VideoProps>>((props, ref) => (
  <VideoElement {...props} ref={ref} />
));

Video.displayName = 'Video';

export * from './video.types';
