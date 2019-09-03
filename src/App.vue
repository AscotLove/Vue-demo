<template>
  <div id="#app">
    <div class="todo-container">
      <todo-header></todo-header>
      <todo-list></todo-list>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import List from './components/List';
  import Footer from './components/Footer';

  export default {
    name: "App",
    components: {
      'todo-header': Header,
      'todo-list': List,
      'todo-footer': Footer,

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
