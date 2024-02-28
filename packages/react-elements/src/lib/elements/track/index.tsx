import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TrackElementProps, TrackProps } from './track.types';

const TrackElement = stylin<
  TrackElementProps & RefAttributes<TrackElementProps>
>('track')();

export const Track = forwardRef<PropsWithChildren<TrackProps>>((props, ref) => (
  <TrackElement {...props} ref={ref} />
));

Track.displayName = 'Track';

export * from './track.types';
