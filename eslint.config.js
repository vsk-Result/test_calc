import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,

    ...tseslint.configs.recommendedTypeChecked,

    {
        files: ['**/*.{ts,tsx}'],

        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },

        rules: {
            ...reactHooks.configs.recommended.rules,

            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            'unused-imports/no-unused-imports': 'error',

            '@typescript-eslint/no-unused-vars': 'off',

            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],

                    alphabetize: {
                        order: 'asc',
                    },

                    'newlines-between': 'always',
                },
            ],

            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // react
                        ['^react', '^@?\\w'],

                        // app aliases
                        [
                            '^@app',
                            '^@pages',
                            '^@widgets',
                            '^@features',
                            '^@entities',
                            '^@shared',
                        ],

                        // absolute imports
                        ['^src/'],

                        // relative imports
                        ['^\\.'],

                        // styles
                        ['^.+\\.?(css)$'],
                    ],
                },
            ],

            'simple-import-sort/exports': 'error',
        },
    },

    prettier,
];
