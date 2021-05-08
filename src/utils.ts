import path from 'path'
export const resolve = (name: string, root = __dirname) => path.resolve(root, name)
