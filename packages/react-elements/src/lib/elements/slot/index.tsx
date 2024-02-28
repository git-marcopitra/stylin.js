import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SlotElementProps, SlotProps } from './slot.types';

export const stylinSlot = stylin<
  SlotElementProps & RefAttributes<SlotElementProps>
>('slot');

const SlotElement = stylinSlot();

export const Slot = forwardRef<PropsWithChildren<SlotProps>>((props, ref) => (
  <SlotElement {...props} ref={ref} />
));

Slot.displayName = 'Slot';

export * from './slot.types';
