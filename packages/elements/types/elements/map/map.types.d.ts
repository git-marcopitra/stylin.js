import { StylinComponentProps } from '@stylin.js/react';
import { MapHTMLAttributes } from 'react';
export type MapElementProps = Omit<MapHTMLAttributes<HTMLMapElement>, 'color' | 'translate'>;
export interface MapProps extends StylinComponentProps, MapElementProps {
}
