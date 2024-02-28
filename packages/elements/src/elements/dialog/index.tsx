import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DialogElementProps, DialogProps } from './dialog.types';

export const stylinDialog = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DialogElementProps & RefAttributes<DialogElementProps>>('dialog')(
    ...styles
  );

const DialogElement = stylinDialog();

export const Dialog = forwardRef<DialogElementProps, PropsWithChildren<DialogProps>>(
  (props, ref) => <DialogElement {...props} ref={ref} />
);

Dialog.displayName = 'Dialog';

export * from './dialog.types';
