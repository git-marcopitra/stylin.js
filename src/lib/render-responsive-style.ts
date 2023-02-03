import renderProperty from './render-property';
import { TRenderResponsiveStyles } from './stylin.types';
import { getBreakpoint } from './utils';

const renderResponsiveStyle: TRenderResponsiveStyles = (theme, prop, value) => {
  if (!value) return [];

  if (!Array.isArray(value))
    return [renderProperty(theme, prop, value as string | number)];

  return (value as Array<string | number>).map((style, index) => {
    if (!style) return {};

    if (index == 0) return renderProperty(theme, prop, style);

    return {
      [`@media (min-width: ${getBreakpoint(index, theme)})`]: renderProperty(
        theme,
        prop,
        style
      ),
    };
  }, []);
};

export default renderResponsiveStyle;
