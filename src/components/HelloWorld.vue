<template>
  <div>
    <h2>{{msg}}</h2>
    <img src="../assets/logo.png" alt="logo">
  </div>
</template>


<script>
  export default{
    data () {
     return{
       msg:'Hello World'
     }
    }
  }
</script>

<style>
  h2{
    color: aqua;
    font-size: 30px;
  }
  img{
    width: 100px;
    height: 100px;
  }

</style>
