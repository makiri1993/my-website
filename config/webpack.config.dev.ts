import webpack from 'webpack'
import BaseConfig from './webpack.config.base'

const DevelopmentConfig: webpack.Configuration = {
  ...BaseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  }
}

export default DevelopmentConfig
