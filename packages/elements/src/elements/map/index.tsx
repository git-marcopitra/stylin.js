import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MapElementProps, MapProps } from './map.types';

export const stylinMap = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & MapElementProps & RefAttributes<MapElementProps>>('map')(
    ...styles
  );

const MapElement = stylinMap();

export const Map = forwardRef<MapElementProps, PropsWithChildren<MapProps>>((props, ref) => (
  <MapElement {...props} ref={ref} />
));

Map.displayName = 'Map';

export * from './map.types';
