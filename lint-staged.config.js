module.exports = {
  // Run ESLint fix on all supported files
  // '*.{js,jsx,ts,tsx,mjs,cjs,json,md,mdx,css,html,yml,yaml}': ['eslint --fix --no-warn-ignored'],
  '*.{js,jsx,ts,tsx,mjs,cjs,json,md,mdx,css,html,yml,yaml}': ['eslint --fix '],

  // Run type checking on TypeScript files
  // '**/*.ts?(x)': () => 'npm run check-types',

  // Format other files with Prettier if needed
  '*.{md,mdx,json,yml,yaml,css,scss}': ['prettier --write'],
};
