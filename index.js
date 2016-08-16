const fork = require('child_process').fork;

const path = require('path');

class EslintES6Plugin {
  constructor({ cwd = '' } = {}) {
    this[Symbol.for('initProcess')]();
  }

  [Symbol.for('initProcess')]() {
    const modulePath = path.join(__dirname, 'lib', 'eslint-es6.js');

    this[Symbol.for('process')] = fork(modulePath, [], { silent: true });
  }

  getProcess() {
    return this[Symbol.for('process')];
  }
};

module.exports = EslintES6Plugin;
