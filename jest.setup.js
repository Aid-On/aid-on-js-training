const originalDescribe = global.describe;
global.describe = (name, fn) => {
  return originalDescribe(name, () => {
    try {
      fn();
    } catch (e) {
      if (e.name === 'TrainingSkipError') {
        it.skip('未実装のためスキップ', () => {});
        return;
      }
      throw e;
    }
  });
};
