import { StylinComponentProps } from '@stylin.js/react';
import { OptgroupHTMLAttributes } from 'react';

export type OptgroupElementProps = Omit<
  OptgroupHTMLAttributes<HTMLOptGroupElement>,
  'color' | 'translate'
>;

export interface OptgroupProps
  extends StylinComponentProps,
    OptgroupElementProps {}
