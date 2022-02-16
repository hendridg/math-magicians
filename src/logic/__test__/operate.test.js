import operate from '../operate';

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
