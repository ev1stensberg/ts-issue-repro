import * as webpack from 'webpack'
import {join} from 'path'

const config: webpack.Configuration = {
    entry: join(__dirname, 'index.js'),
    module: {
      rules: [{
        test: /\.css$/,      // Match any files that end with ".css"
        use: 'style-loader', // Pipe these files through style-loader upon import
      }]
    }
  }
  export default config