import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DialogElementProps, DialogProps } from './dialog.types';

export const Dialog = forwardRef<PropsWithChildren<DialogProps>>(
  (props, ref) => {
    const DialogElement = stylin<
      DialogElementProps & RefAttributes<DialogElementProps>
    >('dialog')();

    return <DialogElement {...props} ref={ref} />;
  }
);

Dialog.displayName = 'Dialog';

export * from './dialog.types';
