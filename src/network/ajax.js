import axios from 'axios';
// 强烈推荐项目所有要用到的第三方框架,都自己简单封装以下,方便出重大bug的时候更换
// axios自己封装的目录,主要是有一些公共配置分别封装一下,比如baseURL,或者其他一些配置比如headers等等(如果一个项目存在多个ajax请求服务器,那么此时就派上大用场了)
// 本例中当我们要请求127.0.0.1的数据,那么就引用ajax, 用10.6.6.6的数据就引用ajax2

import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export function ajax(config) {
  const ajax = axios.create({
    baseURL: 'http://127.0.0.1:8988/',
    timeout: 6000
  });
  // 因为axios.create()返回的就是一个Promise对象,这里直接返回,之后就可以用then()和catch()来接收成功或失败的回调
  // 后续如果不在使用axios,那么我只需要在这里稍微做修改,然后返回Promise对象就可以了,不用每个文件都做修改
  return ajax(config);
}

export function ajax3(config) {
  const ajax = axios.create({
    baseURL: 'http://127.0.0.1:8988/',
    timeout: 6000
  });
  // 请求拦截器
  // 以下几种情况需要用到请求拦截器
  // 1.要修改原始定义的headers; 2.传递登录信息; 3.展现载入动画(然后在响应拦截器里面关闭动画)
  ajax.interceptors.request.use(config => {
    // 这里必须要return出去一个config
    // 注意,后台apache服务器在虚拟目录设置里面必须添加允许跨域的相关设置
    // Header set Access-Control-Allow-Origin http://localhost:8080
    // Header set Access-Control-Allow-Credentials true
    // Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, token"
    config.headers.common['token'] = VueCookies.get('token');
    console.log(VueCookies.get('token'));
    console.log(config);
    return config;
  }, err => {
    // 请求失败,一般很少很少用到
    console.log(err);
  });
  // 响应拦截器
  ajax.interceptors.response.use(res => {
    // 默认返回一大堆信息,我们只需要data
    return res.data;
  }, err => {
    console.log('请求失败', err);
  })
  return ajax(config);
}


export const ajax2 = (config) => {
  // 第二种方式,自己传入回调
  const ajax = axios.create({
    baseURL: 'http://10.6.6.6:8988/',
    timeout: 6000
  });
  ajax(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.error(err)
    });
}