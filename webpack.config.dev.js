const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtracPlugin.loader, "css-loader",]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtracPlugin({
      filename: '[name].css'
    })

  ],

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,// para comprimir
    port: 3000,// puerto
    historyApiFallback: true,// para tener una historia en el navegador
    open: true// abrir el navegador
  },
}