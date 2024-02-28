import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AudioElementProps, AudioProps } from './audio.types';

const AudioElement = stylin<
  AudioElementProps & RefAttributes<AudioElementProps>
>('audio')();

export const Audio = forwardRef<PropsWithChildren<AudioProps>>((props, ref) => (
  <AudioElement {...props} ref={ref} />
));

Audio.displayName = 'Audio';

export * from './audio.types';
