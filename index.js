#!/usr/bin/env node
const chalk = require('chalk');
const prompt = require('prompt');
const fs = require('fs');
const package = require('./package.json');

/**
 * Data schema.
 */
const schema = {
  properties: {
    title: {
      message: 'Choose a title for your applet',
      require: true,
    },
    description: {
      message: 'Define a description for the applet',
      required: true,
    },
  },
};

/**
 * Paths.
 */
const paths = {
  dashboards: 'pages/applets',
  api: 'api'
};

/**
 * Introduction.
 */
console.log(`\n${chalk.green('stacklet installer')}${chalk.green(package.version)}\n`);
