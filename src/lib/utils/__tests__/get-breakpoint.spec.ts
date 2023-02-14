import { DEFAULT_BREAKPOINTS } from '../../../constants/breakpoints';
import { getBreakpointsTestTable } from '../../../test-utils';
import { Theme } from '../../stylin.types';
import { getBreakpoint } from '..';

describe(getBreakpoint.name, () => {
  const makeSut = (theme: Theme) => ({
    sut: (index: number) => getBreakpoint(index, theme),
  });

  const themeBreakpoints = ['44em', '55em', '64em'];

  it.each(getBreakpointsTestTable(DEFAULT_BREAKPOINTS))(
    'should %d as index and return %s, when receive empty theme',
    (index, value) => {
      const { sut } = makeSut({});
      const breakpoint = sut(Number(index));

      expect(String(breakpoint)).toBe(value);
    }
  );

  it.each(getBreakpointsTestTable(themeBreakpoints))(
    'should %d as index and return %s, when receive a theme with breakpoints',
    (index, value) => {
      const { sut } = makeSut({ breakpoints: themeBreakpoints });
      const breakpoint = sut(Number(index));

      expect(String(breakpoint)).toBe(value);
    }
  );
});
