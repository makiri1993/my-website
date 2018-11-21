import webpack from 'webpack'
import { paths } from './definitions'
import BaseConfig from './webpack.config.base'

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config: webpack.Configuration = {
  ...BaseConfig,
  mode: 'production',
  entry: [require.resolve('./polyfills'), paths.reactIndex],

  performance: {
    hints: 'warning'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          keep_fnames: true,
          keep_classnames: true
        }
      })
    ]
  }
}

export default config
