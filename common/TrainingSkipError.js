export class TrainingSkipError extends Error {
  constructor(message = 'この問題は未実装です。') {
    super(message);
    this.name = 'TrainingSkipError';
  }
}
