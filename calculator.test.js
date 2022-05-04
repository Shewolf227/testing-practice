const Calculator = require('./calculator');

const newCalc = new Calculator();

describe('Simple Calculator', () => {
  test('can add', () => {
    expect(newCalc.add(1, 2)).toBe(3);
  });

  test('can not add when no arguments are provided', () => {
    expect(() => {
      newCalc.add();
    }).toThrow('no numbers to add');
  });

  test('can not add when the arguments are not numbers', () => {
    expect(() => {
      newCalc.add('9', '9');
    }).toThrow('input should be numbers');
  });

  test('can not add when only one argument is provided', () => {
    expect(() => {
      newCalc.add(9);
    }).toThrow('please input the second number');
  });
});

describe('Simple Calculator', () => {
  test('can subtract', () => {
    expect(newCalc.subtract(1, 2)).toBe(-1);
  });

  test('can not subtract when no arguments are provided', () => {
    expect(() => {
      newCalc.subtract();
    }).toThrow('no numbers to subtract');
  });

  test('can not subtract when the arguments are not numbers', () => {
    expect(() => {
      newCalc.subtract('9', '9');
    }).toThrow('input should be numbers');
  });

  test('can not subtract when only one argument is provided', () => {
    expect(() => {
      newCalc.subtract(9);
    }).toThrow('please input the second number');
  });
});

describe('Simple Calculator', () => {
  test('can divide', () => {
    expect(newCalc.divide(6, 2)).toBe(3);
  });

  test('can not divide when no arguments are provided', () => {
    expect(() => {
      newCalc.divide();
    }).toThrow('no numbers to divide');
  });

  test('can not divide when the arguments are not numbers', () => {
    expect(() => {
      newCalc.divide('9', '9');
    }).toThrow('input should be numbers');
  });

  test('can not divide when only one argument is provided', () => {
    expect(() => {
      newCalc.divide(9);
    }).toThrow('please input the second number');
  });
});

describe('Simple Calculator', () => {
  test('can multiply', () => {
    expect(newCalc.multiply(6, 2)).toBe(12);
  });

  test('can not multiply when no arguments are provided', () => {
    expect(() => {
      newCalc.multiply();
    }).toThrow('no numbers to multiply');
  });

  test('can not multiply when the arguments are not numbers', () => {
    expect(() => {
      newCalc.multiply('9', '9');
    }).toThrow('input should be numbers');
  });

  test('can not multiply when only one argument is provided', () => {
    expect(() => {
      newCalc.multiply(9);
    }).toThrow('please input the second number');
  });
});
