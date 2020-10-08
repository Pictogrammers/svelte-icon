module.exports = {
	moduleFileExtensions: ['js', 'svelte', 'json'],
	transform: {
		'^.+\\.svelte$': 'svelte-jester',
		'^.+\\.js$': ['babel-jest', { configFile: './babel.config.js' }],
	},
	transformIgnorePatterns: ['/node_modules/'],
}
