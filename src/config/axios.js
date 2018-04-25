import axios from 'axios';
import { Loading, Message } from 'element-ui';
// 超时时间
axios.defaults.timeout = 5000;
let loadinginstace;
// 拦截请求
axios.interceptors.request.use(function(config) {
  loadinginstace = Loading.service({ fullscreen: true });
  return config
}, function(error) {
  loadinginstace.close()
  Message.error('加载超时');
  return Promise.reject(error)
})

// 拦截相应

axios.interceptors.response.use(function(config) {
  // if (config.data.code == 'F00000') {
  //   localStorage.removeItem('token');
  //   return false;
  // };
  loadinginstace.close();
  return config
}, function(error) {
  loadinginstace.close()
  Message.error('加载超时');
  return Promise.reject(error);
});
