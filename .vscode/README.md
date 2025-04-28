# VS Code Configuration

This directory contains configuration files for Visual Studio Code to ensure a consistent development experience across the team.

## Features

### Auto-formatting with ESLint

Files are automatically formatted with ESLint when you save them. This ensures consistent code style across the project.

### Tasks

The following tasks are available:

- **Project wide type checking with TypeScript** (default build task)
- **Format all files with ESLint** (Ctrl+Shift+F)
- **Fix ESLint issues in current file** (Ctrl+Alt+F)

### Keyboard Shortcuts

- `Ctrl+Shift+F`: Format all files in the project with ESLint
- `Ctrl+Alt+F`: Fix ESLint issues in the current file

## Settings

The `settings.json` file configures VS Code to:

- Use the workspace version of TypeScript
- Disable the default formatter (Prettier)
- Enable ESLint auto-fixing on save
- Configure ESLint to validate all supported file types

## How It Works

When you save a file, VS Code will automatically run ESLint with the `--fix` option on that file. This applies all the auto-fixable rules defined in our ESLint configuration.

## Troubleshooting

If auto-formatting isn't working:

1. Make sure the ESLint extension is installed in VS Code
2. Check that the file type is in the `eslint.validate` array in `settings.json`
3. Try running the "Fix ESLint issues in current file" task manually
4. Check the ESLint output for any errors

## Manual Formatting

You can manually format:

- The current file: Run the "Fix ESLint issues in current file" task (Ctrl+Alt+F)
- All files: Run the "Format all files with ESLint" task (Ctrl+Shift+F)
- From the command line: `npm run format`
