/**
 * Created by 98194 on 2018/11/11.
 */
//入口js文件
//引入vue模块
import Vue from 'vue'
//引入App模块
import App from './App.vue'

//创建vm
new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})
