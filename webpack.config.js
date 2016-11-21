module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel'
			},
			{ 
				test: /\.css$/, loader: "style-loader!css-loader" 
			},	
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
		]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
	target: "electron"
	// node: {
	// 	console: true,	
	// 	global: true,	
	// 	process: true,	
	// 	Buffer: true,	
	// 	setImmediate: true
	// }
};
