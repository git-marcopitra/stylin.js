import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { EmbedElementProps, EmbedProps } from './embed.types';

export const stylinEmbed = stylin<
  EmbedElementProps & RefAttributes<EmbedElementProps>
>('embed');

const EmbedElement = stylinEmbed();

export const Embed = forwardRef<PropsWithChildren<EmbedProps>>((props, ref) => (
  <EmbedElement {...props} ref={ref} />
));

Embed.displayName = 'Embed';

export * from './embed.types';
