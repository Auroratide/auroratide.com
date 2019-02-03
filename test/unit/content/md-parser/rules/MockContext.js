export default class MockContext {
  constructor() {
    this.asBlock = { parse: n => n };
    this.asInline = { parse: n => n };
  }
}