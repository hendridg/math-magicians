import calculate from '../calculate';

describe('Testing calculate.js file', () => {
  it('Test sum 2 + 2 = 4 operation', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '=')).toStrictEqual({
      next: null,
      operation: null,
      total: '4',
    });
  });
  it('Test multiply 2.5 x 2 = 5 operation', () => {
    const obj = {
      total: '2',
      next: '2.5',
      operation: 'x',
    };
    expect(calculate(obj, '=')).toStrictEqual({
      next: null,
      operation: null,
      total: '5',
    });
  });
  it('Test divede 2 / 2 = 1 operation', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '/',
    };
    expect(calculate(obj, '=')).toStrictEqual({
      next: null,
      operation: null,
      total: '1',
    });
  });
});
