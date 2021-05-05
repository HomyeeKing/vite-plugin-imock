import type { PluginOption } from 'vite'
import { resolve } from '@/utils'

function mocker(): PluginOption {
  let mockjs: any

  try {
    const resolved = require.resolve('mockjs')
    mockjs = require(resolved)
  }
  catch (e) {
    throw new Error('vite-plugin-mocker requires mockjs to be present in the dependency tree.')
  }
  function clearRequireCache() {
    Object.keys(require.cache).forEach((key) => {
      delete require.cache[key]
    })
  }
  return {
    name: 'vite-plugin-mocker',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/api')) {
          const key = resolve(`mocker${req.url}`)
          try {
            clearRequireCache()
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const data = require(key)()
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(mockjs.mock(data)))
            return
          }
          catch (error) {
            throw new Error(error)
          }
        }
        next()
      })
    },
  }
}

export default mocker
