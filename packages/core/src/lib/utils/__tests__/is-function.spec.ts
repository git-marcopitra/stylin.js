import { isFunction } from './../../utils';

describe(isFunction.name, () => {
  const makeSut = () => ({
    sut: isFunction,
  });

  it('should return true when receive an arrow function', () => {
    const { sut } = makeSut();

    const result = sut(() => '');

    expect(result).toBeTruthy();
  });
  it('should return true when receive an anonymous function', () => {
    const { sut } = makeSut();

    const result = sut(function () {
      return '';
    });

    expect(result).toBeTruthy();
  });
  it('should return true when receive a normal function', () => {
    const { sut } = makeSut();

    const result = sut(function fn() {
      return '';
    });

    expect(result).toBeTruthy();
  });
  it('should return true when receive a stored function', () => {
    const { sut } = makeSut();

    const storedFn = function fn() {
      return '';
    };

    const result = sut(storedFn);

    expect(result).toBeTruthy();
  });
  it('should return true when receive a stored anonymous function', () => {
    const { sut } = makeSut();

    const storedAnonymousFn = function () {
      return '';
    };

    const result = sut(storedAnonymousFn);

    expect(result).toBeTruthy();
  });
  it('should return true when receive a stored arrow function', () => {
    const { sut } = makeSut();

    const storedArrowFn = () => '';

    const result = sut(storedArrowFn);

    expect(result).toBeTruthy();
  });
  it('should return false when receive an array', () => {
    const { sut } = makeSut();

    const result = sut([]);

    expect(result).toBeFalsy();
  });
  it('should return false when receive an object', () => {
    const { sut } = makeSut();

    const result = sut({});

    expect(result).toBeFalsy();
  });
  it('should return false when receive a string', () => {
    const { sut } = makeSut();

    const result = sut('');

    expect(result).toBeFalsy();
  });
  it('should return false when receive a number', () => {
    const { sut } = makeSut();

    const result = sut(NaN);

    expect(result).toBeFalsy();
  });
  it('should return false when receive undefined', () => {
    const { sut } = makeSut();

    const result = sut(undefined);

    expect(result).toBeFalsy();
  });
  it('should return false when receive null', () => {
    const { sut } = makeSut();

    const result = sut(null);

    expect(result).toBeFalsy();
  });
});
