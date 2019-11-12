export default [
  { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
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
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true, // true outputs JSX tags
        },
      },
    ],
  },
  {
    test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
    loader: 'file-loader',
  },
];
