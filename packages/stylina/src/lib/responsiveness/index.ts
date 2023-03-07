import { DEFAULT_BREAKPOINTS } from '../../constants/index.js';
import { RawStyle } from '../types';
import getResponsiveValues from './get-responsive-values.js';

const wrapRender = (className: string, style: string) =>
  `${className} {\n ${style} }\n`;

const renderResponsiveStyle = (className: string, styles: RawStyle): string => {
  const responsiveStyles = getResponsiveValues(styles);

  return ['0', ...DEFAULT_BREAKPOINTS].reduce((acc, breakpoint, index) => {
    if (index === 0)
      return acc + wrapRender(className, responsiveStyles[index].join(''));

    // console.log('>> responsiveStyles[index] :: ', responsiveStyles[index]);
    responsiveStyles[index];

    if (responsiveStyles[index]?.length)
      return `${acc}\n@media (min-width: ${breakpoint}) {\n
        ${wrapRender(className, responsiveStyles[index].join('\t'))}
      }`;

    return acc;
  }, '');
};

export default renderResponsiveStyle;
