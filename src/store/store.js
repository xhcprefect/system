import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var state={
    form: {
        name: "",
        pass: "",
        time: "",
        prop: ""
      },
      dialogFormVisible : false
}
var mutations={
    change(state,name){
        state.dialogFormVisible=name
    }
}
var actions={
    change(context,name){
        context.commit("change",name)
    }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
})
export default store
