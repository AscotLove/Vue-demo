<template>
  <ul>
    <todo-item v-for="todo of todos" :todo="todo" :key="todo.id"></todo-item>
  </ul>
</template>

<script>
  import Item from './Item';
  export default {
    name: "List",
    props: {
      todos: {
        type: Array,
      }
    },
    components: {
      'todo-item': Item
    }
  }
</script>

<style scoped>

</style>
