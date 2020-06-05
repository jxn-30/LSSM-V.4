module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    plugins: ['vue', 'prettier', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/essential',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'guard-for-in': 2,
        'no-prototype-builtins': 0,
        'prettier/prettier': 'error',
        'semi': ['error', 'always'],
    },
};
