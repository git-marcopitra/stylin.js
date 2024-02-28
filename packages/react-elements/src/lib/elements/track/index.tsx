import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TrackElementProps, TrackProps } from './track.types';

export const stylinTrack = stylin<
  TrackElementProps & RefAttributes<TrackElementProps>
>('track');

const TrackElement = stylinTrack();

export const Track = forwardRef<PropsWithChildren<TrackProps>>((props, ref) => (
  <TrackElement {...props} ref={ref} />
));

Track.displayName = 'Track';

export * from './track.types';
