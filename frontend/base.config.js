const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  output: {
    // where to generate webpack assets
    path: path.join(__dirname, '..', 'public', 'assets', 'webpack'),
    filename: 'bundle-[name].js'
  },
  entry: {
    application: ['../ui/src/main.ts'],
  },
  resolve: {
    // Default extensions to require file without extension
    extensions: ['', '.js', '.ts', '.scss', '.css'],
    modulesDirectories: [ 'node_modules' ],
    alias: {
      // Handy shortcut: use absolute path `require(~lib/mylib)` from any place
      lib: path.join(__dirname, 'lib'),
    }
  },
  module: {
    // Loaders with identical settings for both
    // development and production environments
    loaders: [
        {
            test: /\.htm(l)?/,
            loader: 'raw-loader'
        },
        // Run css/scss files that end in 'component.css' or 'component.scss'
        // through a raw loader so that they can be inserted inline in components
        {
            test: /\.component\.(css|scss)$/i,
            loaders: ['raw-loader', 'sass-loader']
        },
        // Run css/scss files that do not have '.component.' in the filename
        // through the standard loader for global import
        {
            test: /^(?!.*component\.(s)?css$).*\.(s)?css$/i,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        // Run ts files through TypeScript
        {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'ts-loader'
        }
      // Use ES6 syntax (highly recommended!)
      // (run `npm install babel-loader babel-core babel-preset-es2015 --save-dev`)
      // {
      //   test: /\.js$/,
      //   include: [ path.resolve(__dirname + 'frontend/app') ],
      //   loader: 'babel?presets[]=es2015'
      // },

      // Use Coffescript
      // { test: /\.coffee$/, loader: 'coffee-loader' },

      // Use Vue.js framework (run `npm install vue vue-loader --save-dev`)
      // { test: /\.vue$/, loader: 'vue' },

      // Makes `$` and `jQuery` available globally
      // { test: require.resolve('jquery'), loader: 'expose?$!expose?jQuery' }
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // }),

    // Use `__RAILS_ENV__` variable in your Javascript code
    new webpack.DefinePlugin({
      __RAILS_ENV__: JSON.stringify(process.env.RAILS_ENV || 'production'),
    })
  ]
}
