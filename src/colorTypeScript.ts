const chalk = require('chalk');

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.yellow.bgBlack.underline('Warning!'));
