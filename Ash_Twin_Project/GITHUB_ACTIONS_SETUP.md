# GitHub Actions Setup - Brownie Challenge 2

## Overview

This repository now includes automated code quality checks using GitHub Actions workflows.

## Workflows Implemented

### 1. **Linter Workflow** (`.github/workflows/lint.yml`)

- **Tool**: ESLint
- **Purpose**: Checks JavaScript code for syntax errors, potential bugs, and code style violations
- **Runs on**:
    - Pull requests to `main`, `master`, or `develop` branches
    - Pushes to `main` or `master` branches

### 2. **Formatter Workflow** (`.github/workflows/formatter.yml`)

- **Tool**: Prettier
- **Purpose**: Ensures consistent code formatting across all files (JS, HTML, CSS, MD, JSON)
- **Runs on**:
    - Pull requests to `main`, `master`, or `develop` branches
    - Pushes to `main` or `master` branches

## Configuration Files

### ESLint Configuration (`.eslintrc.json`)

- Environment: Browser, ES2021
- Extends: `eslint:recommended`
- Custom rules:
    - 4-space indentation
    - Single quotes
    - Semicolons required
    - Unix line endings

### Prettier Configuration (`.prettierrc.json`)

- Single quotes
- Semicolons required
- 100 character line width
- 4-space tabs
- ES5 trailing commas

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Linter

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix
```

### Run Formatter

```bash
# Check formatting
npm run format:check

# Auto-format all files
npm run format
```

## How It Works

1. When you create a **Pull Request** to main branches:
    - ESLint runs automatically to check code quality
    - Prettier runs automatically to verify formatting
    - Both must pass before merging

2. When you **Push** to main/master branches:
    - Same checks run to ensure code quality is maintained
    - Prevents broken or inconsistent code from reaching production

## Benefits

✅ **Automated Quality Checks**: Every PR is automatically validated  
✅ **Consistent Code Style**: Prettier ensures uniform formatting  
✅ **Error Prevention**: ESLint catches bugs before they reach production  
✅ **Team Collaboration**: Clear standards for all contributors  
✅ **CI/CD Ready**: Foundation for automated testing and deployment

## Goal Achieved

✨ Code quality is now **automated**, ensuring every PR is:

- Clean
- Consistent
- Error-free

---

**Challenge Completed**: Brownie Challenge 2 - GitHub Action Setup ✓
