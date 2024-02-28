import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AudioElementProps, AudioProps } from './audio.types';

export const stylinAudio = stylin<
  AudioElementProps & RefAttributes<AudioElementProps>
>('audio');

const AudioElement = stylinAudio();

export const Audio = forwardRef<PropsWithChildren<AudioProps>>((props, ref) => (
  <AudioElement {...props} ref={ref} />
));

Audio.displayName = 'Audio';

export * from './audio.types';
