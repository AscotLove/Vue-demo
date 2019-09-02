<template>
  <div id="app">
    <todo-header @click="handleAdd('$event.todo')"></todo-header>
    <todo-list :todos="todos"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
  import Header from './components/Header';
  import List from './components/List';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    data() {
      return  {
        todos: [
          {
            id: 1,
            text: 'feiji',
            checked: false
          },
          {
            id: 2,
            text: 'feiji',
            checked: false
          },
          {
            id: 3,
            text: 'feiji',
            checked: false
          },
        ]
      }
    },
    methods: {
      handleAdd(todo) {
        this.todos.unshift(todo)
      }
    },
    components: {
      'todo-header': Header,
      'todo-list': List,
      'todo-footer': Footer
    }
  }
</script>

<style>

</style>
