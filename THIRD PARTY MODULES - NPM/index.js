// 1
import validator from 'validator';
const cek = validator.isEmail('rifky@g.com');
console.log(cek);

// 2
import chalk from 'chalk';
const log = console.log;
console.log(chalk.blue('Hello World'));
console.log(chalk.bgRed('Rifky'));
