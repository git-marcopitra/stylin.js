import { StylinComponentProps } from '@stylin.js/react';
import { MeterHTMLAttributes } from 'react';
export type MeterElementProps = Omit<MeterHTMLAttributes<HTMLMeterElement>, 'color' | 'translate'>;
export interface MeterProps extends StylinComponentProps, MeterElementProps {
}
