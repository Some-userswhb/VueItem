<template>
  <div>
    <h1>第一个vue脚手架项目</h1>
    <!--组件化标签-->
    <HelloWrold/>
  </div>
</template>

<script>
  import HelloWrold from './components/HelloWorld.vue'
  export default {
    components:{
      HelloWrold
    }


  }
</script>

<style>
  h1{
    color: blue;
  }
</style>
