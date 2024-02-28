import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type AsideElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface AsideProps extends StylinComponentProps, AsideElementProps {
}
