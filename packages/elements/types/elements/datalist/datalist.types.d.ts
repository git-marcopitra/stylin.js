import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type DatalistElementProps = Omit<HTMLAttributes<HTMLDataListElement>, 'color' | 'translate'>;
export interface DatalistProps extends StylinComponentProps, DatalistElementProps {
}
