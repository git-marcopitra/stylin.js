import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AudioElementProps, AudioProps } from './audio.types';

export const Audio = forwardRef<PropsWithChildren<AudioProps>>((props, ref) => {
  const AudioElement = stylin<
    AudioElementProps & RefAttributes<AudioElementProps>
  >('audio')();

  return <AudioElement {...props} ref={ref} />;
});

Audio.displayName = 'Audio';

export * from './audio.types';
