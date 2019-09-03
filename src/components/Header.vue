<template>
  <div class="todo-header">
    <input type="text" v-model="msg" @keydown.enter="addTodo">
  </div>
</template>

<script>
  import { getItem } from './utils/storage';
  export default {
    name: "Header",
    data() {
      return {
        msg: '',
        id: getItem("todoId") || 0,
      }
    },
    methods: {
      addTodo() {
        let todo = null;
        if (this.msg) {
          todo = {
            id: ++this.id,
            text: this.msg,
            checked: false
          }
          this.$emit('addTodo', todo)
        }
       this.msg = ''
      }
    },

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
