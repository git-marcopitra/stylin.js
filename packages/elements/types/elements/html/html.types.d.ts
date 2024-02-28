import { StylinComponentProps } from '@stylin.js/react';
import { HtmlHTMLAttributes } from 'react';
export type HtmlElementProps = Omit<HtmlHTMLAttributes<HTMLHtmlElement>, 'color' | 'translate'>;
export interface HtmlProps extends StylinComponentProps, HtmlElementProps {
}
