#!/usr/bin/env node

/**
 * This script runs ESLint with the --fix option on all files in the project.
 * It's useful for applying consistent formatting across the entire codebase.
 */

const { execSync } = require('node:child_process');
// const path = require('node:path');

// Define file extensions to format
const extensions = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'json',
  'md',
  'mdx',
  'css',
  'html',
  'yml',
  'yaml',
];

// Build the ESLint command
const eslintCommand = `npx eslint . --fix --ext ${extensions.join(',')}`;

console.log('🔍 Running ESLint to format all files...');

try {
  // Execute the command
  execSync(eslintCommand, { stdio: 'inherit' });
  console.log('✅ All files formatted successfully!');
} catch (error) {
  console.error('❌ Error formatting files:', error.message);
  process.exit(1);
}
