import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MapElementProps, MapProps } from './map.types';

export const stylinMap = stylin<
  MapElementProps & RefAttributes<MapElementProps>
>('map');

const MapElement = stylinMap();

export const Map = forwardRef<PropsWithChildren<MapProps>>((props, ref) => (
  <MapElement {...props} ref={ref} />
));

Map.displayName = 'Map';

export * from './map.types';
