import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { CanvasElementProps, CanvasProps } from './canvas.types';

export const stylinCanvas = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & CanvasElementProps & RefAttributes<CanvasElementProps>>('canvas')(
    ...styles
  );

const CanvasElement = stylinCanvas();

export const Canvas = forwardRef<PropsWithChildren<CanvasProps>>(
  (props, ref) => <CanvasElement {...props} ref={ref} />
);

Canvas.displayName = 'Canvas';

export * from './canvas.types';
