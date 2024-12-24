// myCustomReporter.js (ESM)
import chalk from 'chalk';

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
        console.log(
          chalk.bgGreen.black(' PASS '),
          chalk.green(item.fullName || item.title)
        );
      }

      // failureMessages の中に TrainingSkipError が含まれていればカウント
      // それ以外の場合は詳細(リッチ)に表示する
      item.failureMessages.forEach((msg) => {
        if (msg.includes('TrainingSkipError')) {
          this.trainingSkipCount++;
        } else {
          // ---- ここでスタックトレースを取り除く ----
          // 例: `at xxx` という行をすべて削除
          const shortMsg = msg
            .split('\n')
            .filter((line) => !line.trim().startsWith('at'))
            .join('\n');

          console.log(chalk.bgRed.white(' ERROR '));
          console.log(chalk.red(`  テスト名: ${item.fullName || item.title}`));
          console.log(chalk.red(`  詳細:     ${shortMsg}`));
        }
      });
    });
  }

  onRunComplete(contexts, results) {
    console.log(`\nTrainingSkipError: ${this.trainingSkipCount}回`);
  }
}
