const webpack =  require('webpack')
const PROD = JSON.parse(process.env.PROD_ENV === 'production')

module.exports = {
  entry: './lib/placeload.js',
  output: {
    filename: PROD ? 'dist/placeload.min.js' : 'dist/placeload.js',
    library: ['Placeload', '[Placeload]'],
    libraryTarget: 'var'
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ] : [],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
}
