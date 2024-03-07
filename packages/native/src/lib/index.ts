/* eslint-disable @typescript-eslint/ban-types */
import styled from '@emotion/styled';

import { utils } from '../../../core/dist';
import renderStyles from './render-styles';
import {
  CreateStylinArguments,
  StylinComponent,
  StylinComponentProps,
} from './stylin.types';

const stylin =
  <StylinProps extends {}>(component: keyof JSX.IntrinsicElements) =>
  (...styles: CreateStylinArguments) =>
    styled(component)<StylinProps & StylinComponentProps>(
      (props) =>
        styles.map((style) => (utils.isFunction(style) ? style(props) : style)),
      ({ theme, ...props }) => renderStyles(props, theme)
    ) as StylinComponent<StylinProps>;

export default stylin;
