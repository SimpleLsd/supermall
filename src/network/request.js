import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 1500
  })

  // 1. 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }), err => {
    console.log(err);
  }
  // 2. 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }), err => {
    console.log(err);
  }

  // 3. 发送真正的网络拦截
  return instance(config)

}