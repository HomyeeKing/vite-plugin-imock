export interface IMockOptions {
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
