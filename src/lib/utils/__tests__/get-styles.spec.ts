import { getStyles } from '..';
import { TStyles, TStyleValue } from './../../stylin.types';

const stylesTestTable: ReadonlyArray<
  [TStyles, ReadonlyArray<[string, TStyleValue]>]
> = [
  [{ color: 'blue' }, [['color', 'blue']]],
  [{ bg: ['red', 'blue'] }, [['bg', ['red', 'blue']]]],
  [
    { bg: ['red', 'yellow'], border: '1px solid', borderColor: 'gray' },
    [
      ['bg', ['red', 'yellow']],
      ['border', '1px solid'],
      ['borderColor', 'gray'],
    ],
  ],
  [
    {
      padding: '1px',
      onClick: () => '', // it will be ignored
      'on-hover': { padding: '2px' }, // it will be ignored
    },
    [['padding', '1px']],
  ],
];

describe(getStyles.name, () => {
  const makeSut = () => ({
    sut: getStyles,
  });

  it.each(stylesTestTable)(
    'should receive %o to return %o',
    (input, output) => {
      const { sut } = makeSut();
      const styles = sut(input);

      expect(styles).toEqual(output);
    }
  );
});
