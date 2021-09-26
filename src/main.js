import Vue from 'vue'
import App from './App.vue'

import axios from "axios";
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Connection': 'keep-alive',
  'Host': '127.0.0.1:8988',
  'Origin': 'http://localhost:8080',
  'Referer': 'http://localhost:8080/',
  'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
  'sec-ch-ua-mobile': '?0',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}
console.log(headers);
// axios全局配置
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8988/';
axios.defaults.timeout = 6000;
//axios.defaults.headers.common['Authorization'] = 'xxx';
//axios.defaults.headers = headers
//axios.defaults.headers.common['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC42LjYuNyIsImF1ZCI6Imh0dHA6XC9cLzEwLjYuNi43IiwianRpIjoiIiwiaWF0IjoxNjMyNjE4NTE3LCJuYmYiOjE2MzI2MTg1MjMsImV4cCI6MTYzMjY2MTcxNywidXNlcm5hbWUiOiJhZG1pbiIsInVpZCI6MTAwMCwicXgiOjk5LCJncyI6MCwiYm0iOjAsInpiIjowfQ.ARqjDsZKTnvSk4RUgouuyPTEflL2itJavqfoXrWrId4';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
