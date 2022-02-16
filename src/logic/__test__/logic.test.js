import calculate from '../calculate';
import operate from '../operate';

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

describe('Testing operate.js file', () => {
  it('Test sum 3 + 3 = 6', () => {
    expect(operate('3', '3', '+')).toBe('6');
  });
  it('Test multiply 3 * 3 = 9', () => {
    expect(operate('3', '3', 'x')).toBe('9');
  });
  it('Test multiply 5 / 3 = undefined', () => {
    expect(operate('3', '0', '/')).toBe("Can't divide by 0.");
  });
});
