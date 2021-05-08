import path from 'path'
export const resolve = (name: string, root = process.cwd()) => path.resolve(root, name)
