// myCustomReporter.js (ESM)
export default class MyCustomReporter {
  constructor(globalConfig, options) {
    console.log('テスト開始');
    this.trainingSkipCount = 0;
  }

  onTestResult(testRunConfig, testResult, aggregatedResults) {
    // テストファイル実行時点で発生したエラーがあればチェック
    if (
      testResult.testExecError &&
      testResult.testExecError.message.includes('TrainingSkipError')
    ) {
      this.trainingSkipCount++;
    }

    // 個々のテストケースをチェック
    testResult.testResults.forEach((item) => {
      // PASSだったテストを表示する（必要なければ削除OK）
      if (item.status === 'passed') {
        console.log(`PASS: ${item.fullName || item.title}`);
      }

      // failureMessages の中に TrainingSkipError が含まれていればカウント
      item.failureMessages.forEach((msg) => {
        if (msg.includes('TrainingSkipError')) {
          this.trainingSkipCount++;
        }
      });
    });
  }

  onRunComplete(contexts, results) {
    console.log(`\nTrainingSkipError: ${this.trainingSkipCount}回`);
  }
}
