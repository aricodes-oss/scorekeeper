"use strict";
module.exports = {
    parserOptions: {
        ecmaVersion: 'latest'
    },
    extends: [
        'airbnb-base',
        'prettier'
    ],
    plugins: [
        'prettier',
        'import'
    ],
    rules: {
        // for loops should not be restricted
        'no-restricted-syntax': [
            'off'
        ],
        // this is a NodeJS app
        'no-console': [
            'off'
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                paths: './src'
            }
        }
    }
};
