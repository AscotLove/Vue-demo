<template>
  <div id="#app">
    <div class="todo-container">
      <todo-header></todo-header>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: "App",
    components: {
      'todo-header': Header
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
