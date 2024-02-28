import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { VideoElementProps, VideoProps } from './video.types';

export const stylinVideo = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & VideoElementProps & RefAttributes<VideoElementProps>>('video')(
    ...styles
  );

const VideoElement = stylinVideo();

export const Video = forwardRef<VideoElementProps, PropsWithChildren<VideoProps>>((props, ref) => (
  <VideoElement {...props} ref={ref} />
));

Video.displayName = 'Video';

export * from './video.types';
