module.exports = {
	files: [
		{
			path: ".next/static/chunks/**/*.js",
			maxSize: "50kB"
		},
		{
			path: ".next/static/css/**/*.css",
			maxSize: "10kB"
		}
	],
	ci: {
		trackBranches: ["main"]
	}
};
