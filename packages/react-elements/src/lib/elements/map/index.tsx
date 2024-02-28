import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MapElementProps, MapProps } from './map.types';

const MapElement = stylin<MapElementProps & RefAttributes<MapElementProps>>(
  'map'
)();

export const Map = forwardRef<PropsWithChildren<MapProps>>((props, ref) => (
  <MapElement {...props} ref={ref} />
));

Map.displayName = 'Map';

export * from './map.types';
