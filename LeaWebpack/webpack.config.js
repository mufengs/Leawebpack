let path=require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports={
  mode: 'development',
  entry:{
    entry:'./src/entry.js',
    first:'./src/first.js'
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    compress: true,
    port: 1717
  }
}