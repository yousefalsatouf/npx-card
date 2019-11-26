'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('Yousef alsatouf'),
  handle: chalk.red('Who I Am :'),
  work: chalk.gray('Junior Web Development;'),
  School: chalk.gray('Saint-Laurent 4000 Liege, Belgium'),

  onlineStuffs : chalk.white('Me Online :'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~yousefalsatouf'),
  github: chalk.gray('https://github.com/') + chalk.green('yousefalsatouf'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('yousef-alsatouf-2a1879187'),
  web: chalk.cyan('https://yousefalsatouf.me'),
  npx: chalk.red('npx') + ' ' + chalk.white('yousefdev'),

  labelWork: chalk.white.bold('   Work:'),
  labelSchool : chalk.white.bold('    School'),
  labelOnlineStuffs : chalk.white.bold('   Online Stuffs,'),
  labelnpm: chalk.white.bold('   Npm:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('   Web:'),
  labelCard: chalk.white.bold('   Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const onlineStuffs = `${data.labelOnlineStuffs}  ${data.onlineStuffs}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               onlineStuffs + newline + // data.onlinestuffs + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
