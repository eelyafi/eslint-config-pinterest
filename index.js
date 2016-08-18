module.exports = {
    env: {
        commonjs: true,
    },
    parser: 'babel-eslint',
    rules: {
        'camelcase': 0,
        'comma-dangle': 0,
        'consistent-return': 0,
        'curly': 2,
        'dot-notation': 0,
        'eol-last': 0,
        'eqeqeq': 2,
        'global-strict': 0,
        'indent': 2,
        'key-spacing': ["error", { "afterColon": true }],
        'keyword-spacing': ["error", { "before": true, "after": true }],
        'max-len': [2, 120, 4, {
            "ignorePattern": "^(import\\s.+)|(\\s*(var\\s.+=\\s*)?require\\s*\\(.+)$"
        }],
        'new-cap': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-console': 2,
        'no-constant-condition': 0,
        'no-debugger': 2,
        'no-empty': 0,
        'no-eq-null': 0,
        'no-extend-native': 0,
        'no-extra-semi': 2,
        'no-multi-spaces': 0,
        'no-octal-escape': 0,
        'no-process-exit': 2,
        'no-script-url': 0,
        'no-shadow': 0,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-underscore-dangle': 0,
        'no-unused-expressions': 2,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
        'no-use-before-define': 2,
        'no-var': 2,
        'prefer-const': ["error", {'destructuring': 'all', 'ignoreReadBeforeAssign': true}],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'semi-spacing': [0, {'before': false, 'after': true}],
        'space-infix-ops': 2,
        'space-unary-ops': 0,
        'sort-imports': ['error', {
            'ignoreCase': true,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple']
        }],
        'strict': 0,
        'yoda': 2,
    }
};
