#!/usr/bin/env node

import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const month = args['m']
const year = args['y']
