import { StylinComponentProps } from '@stylin.js/react';
import { TrackHTMLAttributes } from 'react';

export type TrackElementProps = Omit<
  TrackHTMLAttributes<HTMLTrackElement>,
  'color' | 'translate'
>;

export interface TrackProps extends StylinComponentProps, TrackElementProps {}
