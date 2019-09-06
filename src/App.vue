<template>
  <div id="#app">
    <div class="todo-container">
      <todo-header @addTodo="addTodo"></todo-header>


      <todo-list :todos="todos" :ok="ok"></todo-list>

      <todo-list :todos="todos"></todo-list>


      <todo-footer :todos="todos" @delTodo="delTodo" @checkAll="checkAll"></todo-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import List from './components/List';
  import Footer from './components/Footer';
  import {getItem, setItem} from './components/utils/storage';
  import {subscribe} from 'pubsub-js';

  export default {
    name: "App",
    data() {
      const todosString = getItem("todos");
      return {
        todos: todosString ? todosString : [],
        ok: true,
      }
    },
    components: {
      'todo-header': Header,
      'todo-list': List,
      'todo-footer': Footer,
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
        setItem("todoId", todo.id)
      },
      delTodo() {
        this.todos = this.todos.filter((item) => !item.checked)
      },
      checkAll(val) {
        this.todos.forEach((item) => item.checked = val);
      }
    },
    watch: {
      todos: {
        handler(newVal) {
          setItem("todos", newVal);
          if (newVal.length === 0)  setItem("todoId", 0)
        },
        deep: true
      }
    },
    mounted() {
      subscribe('delTodo', (msg, id) => {
        this.todos = this.todos.filter((item) => item.id !== id)
      });
      subscribe('checkedChange', (msg, {id, checked}) => {
        this.todos.forEach((item) => {
          if (item.id === id) item.checked = checked
        })
      })
    },
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
