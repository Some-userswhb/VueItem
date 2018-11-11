<template>
  <!--<div>
    &lt;!&ndash;引入头部&ndash;&gt;

  </div>-->
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain :todos="todos"/>
      <TodoFooter/>

    </div>
  </div>
</template>


<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Main   from './components/Main.vue';
  export default{
    //当前data 是组件对象的属性 不是vm的里面的属性
    data(){
      return{
        todos:[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:false},
          {title:'敲代码',complete:true}, //默认勾选敲代码
        ]
      }
    },
    methods:{
        addTodo(todo){
          this.todos.unshift(todo)
        }
    },
    components:{//组件标签 Header指向template下面的TodoHeader
      TodoHeader:Header,
      TodoFooter:Footer,
      TodoMain:Main
    }
  }
</script>


<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
