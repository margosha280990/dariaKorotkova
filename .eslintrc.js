module.exports = {
    'env': {
        'browser': true,
        'meteor': true,
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'indent': [2, 4],
        'linebreak-style': [2, 'unix'],
        'quotes': [2, 'single'],
        'semi': [2, 'never'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'keyword-spacing': [2],
        'eol-last': [2],
        'no-trailing-spaces': [2]
    },
    'globals': {
        // Collections
        'Persons': true,
        'Modules': true,
        
        // More stuff
        // [...]

        // Packages
        'lodash': true,
        'i18n': true,
        'moment': true,
        'Messenger': true
    }
}