import { StylinComponentProps } from '@stylin.js/react';
import { SlotHTMLAttributes } from 'react';
export type SlotElementProps = Omit<SlotHTMLAttributes<HTMLSlotElement>, 'color' | 'translate'>;
export interface SlotProps extends StylinComponentProps, SlotElementProps {
}
