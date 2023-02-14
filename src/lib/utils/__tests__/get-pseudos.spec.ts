import { TPseudoEntries, TStyles } from './../../stylin.types';
import { getPseudos } from './../../utils';

const pseudosTestTable: ReadonlyArray<[TStyles, TPseudoEntries]> = [
  [{ 'on-hover': { color: 'blue' } }, [['on-hover', { color: 'blue' }]]],
  [
    { 'on-active': { bg: ['red', 'blue'] } },
    [['on-active', { bg: ['red', 'blue'] }]],
  ],
  [
    {
      'on-hover': { bg: ['red', 'yellow'] },
      'on-focus': { border: '1px solid', borderColor: 'gray' },
    },
    [
      ['on-hover', { bg: ['red', 'yellow'] }],
      ['on-focus', { border: '1px solid', borderColor: 'gray' }],
    ],
  ],
  [
    {
      padding: '1px', // it will be ignored
      onClick: () => '', // it will be ignored
      'on-hover': { padding: '2px' },
    },
    [['on-hover', { padding: '2px' }]],
  ],
];

describe(getPseudos.name, () => {
  const makeSut = () => ({
    sut: getPseudos,
  });

  it.each(pseudosTestTable)(
    'should receive %o to return %o',
    (input, output) => {
      const { sut } = makeSut();
      const pseudos = sut(input);

      expect(pseudos).toEqual(output);
    }
  );
});
