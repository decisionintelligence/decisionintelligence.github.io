import {reactive} from "vue";
import {api} from "boot/axios";



class State {
  constructor() {
    this.papers = reactive([])
  }
  getPaper() {
    return fetch("https://raw.githubusercontent.com/decisionintelligence/files/main/paper_table.json").then(res=>res.json())
    .then(res=>{
      return res[0]
    })
  }
}
export default new State()



// export function
