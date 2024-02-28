import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SlotElementProps, SlotProps } from './slot.types';

const SlotElement = stylin<SlotElementProps & RefAttributes<SlotElementProps>>(
  'slot'
)();

export const Slot = forwardRef<PropsWithChildren<SlotProps>>((props, ref) => (
  <SlotElement {...props} ref={ref} />
));

Slot.displayName = 'Slot';

export * from './slot.types';
