// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
	},
	env: {
		browser: true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ['standard', 'plugin:vue/essential'],
	// required to lint *.vue files
	plugins: ['html'],
	// add your custom rules here
	rules: {
		'comma-dangle': 'off',
		'eol-last': 'off',
		'vue/html-self-closing': 'off',
		'generator-star-spacsing': 'off',
		semi: ['warn', 'never'],
		quotes: ['warn', 'single'],
		'no-unused-vars': 'warn',
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
