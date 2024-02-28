import { StylinComponentProps } from '@stylin.js/react';
import { DataHTMLAttributes } from 'react';
export type DataElementProps = Omit<DataHTMLAttributes<HTMLDataElement>, 'color' | 'translate'>;
export interface DataProps extends StylinComponentProps, DataElementProps {
}
