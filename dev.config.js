module.exports = {
  entry: [
    './example/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  output: {
    path: `${__dirname}/example`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './example',
    historyApiFallback: true
  }
}

