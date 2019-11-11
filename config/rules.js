export default [
  { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
  {
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          webpackImporter: false,
        },
      },
    ],
  },
  {
    test: /\.(html)$/,
    exclude: [/node_modules/, /index\.html$/],
    use: {
      loader: 'html-loader',
      options: { minimize: true },
    },
  },
  {
    test: /\.(png|jpe?g|svg|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
  { 
    test: /\.react.svg$/, use: ['svgr/webpack'] 
  },
  { 
    test: /\.svg$/, use: ['file-loader'] 
  },
  {
    test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
    loader: 'file-loader',
  },
];
