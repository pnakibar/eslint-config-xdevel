module.exports = {
    env: {
        browser: true,
        node: true
    },
    rules: {
        /*************************************
         * Estendendo idiomatic style
        **************************************/
        "computed-property-spacing": [0] ,
        'require-jsdoc': 1,
        'valid-jsdoc': 1,
        'dot-notation': [2, {
            'allowKeywords': true
        }],
        'linebreak-style': [2, 'windows'],
        'indent': [1, 4],
        'no-inline-comments': 0,
        'func-names': 0,
        'semi': [2, 'always'],
        'one-var': [2, {
            'uninitialized': 'never',
            'initialized': 'never'
        }],
        'no-unused-expressions': [2, {
            'allowShortCircuit': true
        }]
    }
};
