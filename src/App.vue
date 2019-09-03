<template>
  <div id="#app">
    <div class="todo-container">
      <todo-header @addTodo="addTodo" v-model="todos"></todo-header>
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
  import { getItem, setItem } from './components/utils/storage';
  import { subscribe } from 'pubsub-js';

  export default {
    name: "App",
    data() {
      var todosString = getItem("todos");
      return {
        todos: todosString ? todosString : []
      }
    },
    created() {
      subscribe('delTodo', (msg, data) => {
        this.todos = this.todos.filter((item) => item.id !== data)
      })
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
    },
    watch: {
      todos: {
        handler(newVal) {
          setItem(newVal)
        },
        deep: true
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
