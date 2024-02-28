import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type AddressElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface AddressProps extends StylinComponentProps, AddressElementProps {
}
