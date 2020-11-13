import * as path from 'path'
import Restapify from '../src/server/index'

const mockedApi = new Restapify({
  rootDir: path.resolve(__dirname, './api')
})
