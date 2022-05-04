module.exports = class Calculator {
  add(firstNum, secondNum) {
    if (!firstNum && !secondNum) throw 'no numbers to add';
    if (!firstNum || !secondNum) throw 'please input the second number';
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') throw 'input should be numbers';

    return firstNum + secondNum;
  }

  subtract(firstNum, secondNum) {
    if (!firstNum && !secondNum) throw 'no numbers to subtract';
    if (!firstNum || !secondNum) throw 'please input the second number';
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') throw 'input should be numbers';

    return firstNum - secondNum;
  }

  divide(firstNum, secondNum) {
    if (!firstNum && !secondNum) throw 'no numbers to divide';
    if (!firstNum || !secondNum) throw 'please input the second number';
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') throw 'input should be numbers';

    return firstNum / secondNum;
  }

  multiply(firstNum, secondNum) {
    if (!firstNum && !secondNum) throw 'no numbers to multiply';
    if (!firstNum || !secondNum) throw 'please input the second number';
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') throw 'input should be numbers';

    return firstNum * secondNum;
  }
};
