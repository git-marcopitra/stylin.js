import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DialogElementProps, DialogProps } from './dialog.types';

const DialogElement = stylin<
  DialogElementProps & RefAttributes<DialogElementProps>
>('dialog')();

export const Dialog = forwardRef<PropsWithChildren<DialogProps>>(
  (props, ref) => <DialogElement {...props} ref={ref} />
);

Dialog.displayName = 'Dialog';

export * from './dialog.types';
