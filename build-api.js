const { inspect } = require('util')
const { writeFileSync } = require('fs-extra')

const main = require('.')

const api = inspect(main.modules, { maxArrayLength: 10000, depth: 10 }).replace(/\n\s+START_TIME: \d+,\n/g, '\n')

writeFileSync(`${__dirname}/dist/api`, api)