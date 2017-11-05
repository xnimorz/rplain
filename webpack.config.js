module.exports = {    
    entry: "./examples/example.js",
    output: {
        path: __dirname + "/examples",
        filename: "bundle.js",
    },
    devtool: 'source-map',
    module: {
    	loaders: [
    		{
    			test: /\.js$/,
    			exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
			},
		],
    },    
}