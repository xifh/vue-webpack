/**
 * Created by zengjie on 2017/6/21.
 *
 */

const ajaxConfig = {
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: 'http://10.21.20.165:8888/crmweb',
    // `method` 是创建请求时使用的方法
    method: 'POST',
    // `headers` 是即将被发送的自定义请求头
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 10000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
    // `onUploadProgress` 允许为上传处理进度事件
    onUploadProgress: function (progressEvent) {
      // 对原生进度事件的处理
    },
    // `onDownloadProgress` 允许为下载处理进度事件
    onDownloadProgress: function (progressEvent) {
      // 对原生进度事件的处理
    },
    // 'proxy' 定义代理服务器的主机名称和端口(跨域的时候用到)
    // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
    // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
    // proxy: {
    //   host: '127.0.0.1',
    //   port: 9000,
    //   auth: {
    //   username: 'mikeymike',
    //   password: 'rapunz3l'
    //   }
    // }
  }
  // 响应结构
  // {
  //   `data` 由服务器提供的响应
  //   data: {},
  //   `status` 来自服务器响应的 HTTP 状态码
  //   status: 200,
  //   `statusText` 来自服务器响应的 HTTP 状态信息
  //   statusText: 'OK',
  //   `headers` 服务器响应的头
  //   headers: {},
  //   `config` 是为请求提供的配置信息
  //   config: {}
  // }
  
  export default ajaxConfig