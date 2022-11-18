import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://106.75.239.46:8000' })
api.interceptors.request.use((config) => {
  let token = localStorage.getItem('access_token')
  if(localStorage.getItem('access_token')!==null){
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token')
  }
  return config
})
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api


  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }
