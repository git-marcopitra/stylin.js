import {
  CUSTOM_PROPERTY_MAP,
  STYLIN_PROPERTY_MAP,
} from '../../../test-utils/constants';
import { TStyleKeys } from '../stylin.types';
import { renderThemedStyleTestFn } from './../../../test-utils/index';
import makeRenderProperty from '.';

const renderPropertyTestTable: ReadonlyArray<
  [string, string | number, Record<string, string>]
> = [
  ['m', 'M', { margin: 'M' }],
  ['p', 'M', { padding: 'M' }],
  ['mx', 'M', { marginLeft: 'M', marginRight: 'M' }],
  ['px', 'M', { paddingLeft: 'M', paddingRight: 'M' }],
  ['padding', 'M', { padding: 'M' }],
  ['margin', '2rem', { margin: '2rem' }],
  ['bg', 'primary', { background: 'primary' }],
];

describe(makeRenderProperty.name, () => {
  const makeSut = () => ({
    sut: (prop: TStyleKeys, value: string | number) =>
      makeRenderProperty(
        CUSTOM_PROPERTY_MAP,
        STYLIN_PROPERTY_MAP,
        renderThemedStyleTestFn
      )({}, prop, value),
  });

  it.each(renderPropertyTestTable)(
    'should receive prop %s, value %s and returns %o',
    (prop, value, expected) => {
      const { sut } = makeSut();

      const result = sut(prop as TStyleKeys, value);

      expect(result).toEqual(expected);
    }
  );
});
