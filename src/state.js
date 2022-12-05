import {reactive} from "vue";
import {api} from "boot/axios";



class State {
  constructor() {
    this.papers = reactive([])
  }
  getPaper() {
    return api.get('/papers').then(res => {
      this.papers = res.data
      // console.log(this.papers)
      return res.data
    })
  }
}
export default new State()



// export function
