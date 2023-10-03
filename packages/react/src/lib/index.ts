import {
  Attributes,
  Component,
  createElement,
  FC,
  PropsWithChildren,
} from 'react';

const stylin =
  <ComponentProps extends Attributes | null | undefined>(
    component: Component | keyof JSX.IntrinsicElements
  ): FC<PropsWithChildren<ComponentProps>> =>
  (props) => {
    const { children = null, ...restProps } = props ?? { children: null };

    const stylinComponent =
      typeof component === 'string'
        ? createElement(component, restProps, children)
        : null;

    return stylinComponent;
  };

export default stylin;
