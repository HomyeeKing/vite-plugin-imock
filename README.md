# vite-plugin-mock


# Feature
Mock data using vite devServer w/ [mockjs](http://mockjs.com/) syntax supported!

# Options

```ts
 IMockOptions {
  /**
   *  mock目录名
   * @default mocker
   */
  dirName?: string
  /**
   * 接口前缀名
   * @default /api
   */
  prefix?: string
  /**
   * 路径的根目录
   * @default process.cwd()
   */
  root?: string
}

```

# Usage

```js
// vite.config.js

import { defineConfig } from 'vite'
import Mocker from 'vite-plugin-imock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Mocker()],
})


// mocker/api/test.js
module.exports = () => ({
  'data': 'hello world',
  'mockjs|2': [{ // mock syntax supported
    test: 1,
  }],
})

// main.js
fetch('/api/test').then(res => res.json()).then(data => console.log(data))
// {data: 'hello world',mockjs:[{test:1},{test:1}]}

```

