import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, RefAttributes } from 'react';

import { TrackElementProps, TrackProps } from './track.types';

export const stylinTrack = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TrackElementProps & RefAttributes<TrackElementProps>>('track')(
    ...styles
  );

const TrackElement = stylinTrack();

export const Track = forwardRef<TrackElementProps, TrackProps>((props, ref) => (
  <TrackElement {...props} ref={ref} />
));

Track.displayName = 'Track';

export * from './track.types';
