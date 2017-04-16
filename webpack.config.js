const webpack = require('webpack');
const path    = require('path');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  external: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$'      : 'jquery',
      'jQuery' : 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  output : {
    path     : __dirname,
    filename : './public/bundle.js'
  },
  resolve : {
    root  : __dirname,
    alias : {
      AppStyles     : 'app/styles/app.scss'
    },
    extensions : ['', '.js', '.jsx'],
  },
  module : {
    loaders : [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test    : /\.jsx?$/,
        exclude : /(node_modules|bower_components)/,
      }
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ],
  },
  devtool : 'cheap-module-eval-source-map',
};
