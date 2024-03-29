import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AudioElementProps, AudioProps } from './audio.types';

export const stylinAudio = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & AudioElementProps & RefAttributes<AudioElementProps>>('audio')(
    ...styles
  );

const AudioElement = stylinAudio();

export const Audio = forwardRef<AudioElementProps, PropsWithChildren<AudioProps>>((props, ref) => (
  <AudioElement {...props} ref={ref} />
));

Audio.displayName = 'Audio';

export * from './audio.types';
