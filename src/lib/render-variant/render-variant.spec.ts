import { getRenderVariantTestTable } from '../../test-utils';
import type { GenericWithTheme, TVariantStyleFn } from '../stylin.types';
import renderVariant from '.';

describe(renderVariant.name, () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const makeSut = (props: GenericWithTheme<Record<string, any>>) => ({
    sut: renderVariant,
    render: (fn: TVariantStyleFn) => fn(props),
  });

  const theme = {
    letterSpacings: {
      S: '0.2',
      M: '0.4',
      L: '0.6',
    },
  };

  it.each(
    getRenderVariantTestTable(theme, 'letterSpacings', 'letterSpacing', [
      'M',
      'S',
      'L',
    ])
  )(
    'should receive %s value on %s property referencing %s on theme that returns %s',
    (propsValue, property, scale, expected) => {
      const props = {
        theme,
        [property]: propsValue,
      };

      const { sut, render } = makeSut(props);

      const variantFn = sut({
        scale,
        property,
      });

      const result = render(variantFn);

      expect(result).toBe(expected);
    }
  );
  it.each(
    getRenderVariantTestTable(theme, 'letterSpacing', 'letterSpacing', [
      'M',
      'S',
      'L',
    ])
  )(
    'should receive %s value on %s property referencing %s, that not exist on theme returns an empty object',
    (propsValue, property, scale, expected) => {
      const props = {
        theme,
        [property]: propsValue,
      };

      const { sut, render } = makeSut(props);

      const variantFn = sut({
        scale,
        property,
      });

      const result = render(variantFn);

      expect(result).toEqual(expected);
    }
  );
});
