<template>
  <div id="#app">
    <div class="todo-container">
      <todo-header></todo-header>
      <todo-list :todos="todos">
        <template slot-scope="obj">
          <input type="checkbox" v-model="obj.checked">
        </template>
      </todo-list>
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
    data() {
      return {
        todos: [
          {
            id: 1,
            text: 'sdfsdf',
            checkec: false
          }
        ]


      }
    },
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
