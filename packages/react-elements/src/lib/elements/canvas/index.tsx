import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CanvasElementProps, CanvasProps } from './canvas.types';

const CanvasElement = stylin<
  CanvasElementProps & RefAttributes<CanvasElementProps>
>('canvas')();

export const Canvas = forwardRef<PropsWithChildren<CanvasProps>>(
  (props, ref) => <CanvasElement {...props} ref={ref} />
);

Canvas.displayName = 'Canvas';

export * from './canvas.types';
