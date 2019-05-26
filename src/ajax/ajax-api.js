/**
 * Created by zengjie on 2017/6/21.
 */
import axios from 'axios'
import config from './ajax-config'

let taurus = {}
const API = {
  /**
   * get 方法
   * 获取json文件只能用get方法，不能用post方法
   * @param param
   */
  get(param) {
    let instance = axios.create(config);
    return instance.get(param);
  },
  /**
   * get 方法
   * @param param
   */
  post(param) {
    let instance = axios.create(config);
    if (param && param.data) {
      return instance.post(param.url, param.data);
    } else {
      return instance.post(param.url || param);
    }
  },
  /**
   * 并发请求方法
   * @param param
   */
  all(...param) {
    this.spread = axios.spread
    return axios.all(...param);
  },
  reqSuccess(msg) {
    // 这里定义统一的成功处理的回调，比如提示提交成功
    // alert(msg);
  },
  reqFail(msg) {
    // 这里定义统一的成功失败的回调，比如提示提交失败
    // alert(msg);
  }
}

const install = function (Vue,taurus) {
  taurus = taurus
  Vue.prototype.$ajax = API
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(API, {install})