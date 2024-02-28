import { StylinComponentProps } from '@stylin.js/react';
import { TableHTMLAttributes } from 'react';
export type TableElementProps = Omit<TableHTMLAttributes<HTMLTableElement>, 'color' | 'translate' | 'width' | 'border'>;
export interface TableProps extends StylinComponentProps, TableElementProps {
}
