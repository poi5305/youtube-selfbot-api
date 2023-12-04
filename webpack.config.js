const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    library: {
      type: 'umd',
      name: 'sdk',
    },
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.cjs',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs'],
          },
        },
      },
      {
        test: /\.(html|css|ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /favicon\.ico$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
