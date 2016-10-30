var path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanPlugin = require('clean-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'src'),
    DIST_PATH = path.resolve(ROOT_PATH, 'dist'),
    TMPL_PATH = path.resolve(APP_PATH, 'tmpl'),
    ENTRY_LIST = ['vendor'],
    ENTRY_PATHS = {
      vendor: ['redux', 'react-redux', 'redux-thunk']
    }

var files = fs.readdirSync(APP_PATH),
    entryObj = {}
files.forEach(function(filename) {
  if(/[\s\S]+\.js/.test(filename)) {
    ENTRY_LIST.push( filename.match(/([\s\S]+)\.js/)[1] )
    ENTRY_PATHS[ filename.match(/([\s\S]+)\.js/)[1] ] = path.resolve(APP_PATH, filename)
  }
})

module.exports = {
  entry: ENTRY_PATHS,
  output: {
    path: DIST_PATH,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module:{
    loaders:[
      {test:/\.(js|jsx)$/, loader:'babel', exclude:/node_modules/},
      {test:/\.styl$/, loader:ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")},
      {test:/\.(png|jpg|gif)$/, loader:'url?limit=8192&name=img/[name].[ext]?[hash]'}
    ]
  },
  resolve:{
    extensions:['','.js'],
    alias:{
      components: path.resolve(APP_PATH,'components')
    }
  },
  babel: {
    presets: ['es2015','react'],
    plugins: ['transform-runtime']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: 2
    }),
    new CleanPlugin(['dist'], {
      root: ROOT_PATH,
      verbose: true,
      dry: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      minimum: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/bundle.[contenthash:9].css"),
    new HtmlwebpackPlugin({
      title: 'react demo',
      template: path.resolve(TMPL_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ENTRY_LIST,
      inject: 'body'
    })
  ],
  devServer:{
    historyApiFallback: true,
    hot: false,
    inline: true,
    proxy:{
      '/api/*':{
        target: 'http://127.0.0.1:4000',
        secure: false
      }
    }
  },
  devtool: false
}
