<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title" />
  </div>
</template>


<script>
  export default{
    /*使用props接收有App传过来的组件对象属性*/
    props:{
      addTodo:{
        type:Function, //类型
        required:true  //是否必须写数据
      }
    },
    data(){
      return{
        title:''
      }
    },
    methods:{
      add(){
        //根据用户输入的值 封装一个todo对象
        const title = this.title.trim();
        //当用户输入为空时 弹出提示文字
        if(!title){
          return alert('请输入关键字')
        }
        //创建todo对象
        const todo = {
          title,
          complete:false
        }
        //调用addTodo()  当前this是指向当前组件对象 使用bind()设置了this指向
        this.addTodo(todo);
        //最后清除输入
        this.title = '';
      }
    }
  }
</script>


<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
