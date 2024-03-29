import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SlotElementProps, SlotProps } from './slot.types';

export const stylinSlot = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SlotElementProps & RefAttributes<SlotElementProps>>('slot')(
    ...styles
  );

const SlotElement = stylinSlot();

export const Slot = forwardRef<SlotElementProps, PropsWithChildren<SlotProps>>((props, ref) => (
  <SlotElement {...props} ref={ref} />
));

Slot.displayName = 'Slot';

export * from './slot.types';
