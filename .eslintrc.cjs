// 참고: https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'prettier',
    ],
    rules: {
        'no-var': 'error',
        indent: [1, 4, {'SwitchCase': 1}],
        'vue/html-indent': ['error', 2, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
        }],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        quotes: ['error', 'single'],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always',
        }],
        'vue/html-quotes': ['error', 'double', {'avoidEscape': false}],
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 3
            },
            'multiline': {
                'max': 1
            }
        }],
        'vue/multiline-html-element-content-newline': ['error', {
            ignoreWhenEmpty: true,
            ignores: [],
            allowEmptyLines: false,
        }],
        'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-prop-types': 2,
        'vue/v-on-event-hyphenation': ['error', 'always', {
            'autofix': false,
            'ignore': []
        }],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }]
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
