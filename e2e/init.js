const {
  DetoxCircusEnvironment,
  SpecReporter,
  WorkerAssignReporter,
} = require("detox/runners/jest-circus");

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config, context) {
    super(config, context);

    this.initTimeout = 300000;
    this.launchApp = "auto";
    this.relaunchApp = "auto";
    this.reuse = false;
    this.globalInitTimeout = 300000;
    this.sessionInitTimeout = 300000;
    this.sessionReuse = false;
  }

  async handleTestEvent(event, state) {
    await super.handleTestEvent(event, state);
  }
}

module.exports = CustomDetoxEnvironment;
