#!/usr/bin/env node

function showUsageAndExit() {
  const path = require('path');
  const basename = path.basename(process.argv[1]);
  console.error(`Usage: ${basename} [year] [month]`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 1) {
  showUsageAndExit();
}

const name = args[0];
console.log(`Hello, ${name}!`);
