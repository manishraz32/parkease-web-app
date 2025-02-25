import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Example: Customize ESLint rules here
      'no-console': 'off', // Allow console logs as warnings
      'react/react-in-jsx-scope': 'off', // Disable the requirement for React to be in scope
      'quotes': ['error', 'single'], // Enforce single quotes for strings
      'semi': ['error', 'always'], // Require semicolons
      'indent': ['error', 2], // Enforce 2-space indentation
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'on',

      // You can add more rules as needed
    },
  },
];

export default eslintConfig;
