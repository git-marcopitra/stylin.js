import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type HgroupElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface HgroupProps extends StylinComponentProps, HgroupElementProps {
}
