<template>
  <div class="todo-footer">
    <input type="checkbox" v-model="checkAll">
    <span>
      已完成{{ completedTodo}} /全部{{todos.length}}
    </span>
    <button @click="delTodo">清除已完成任务</button>
  </div>
</template>

<script>
  import { publish } from 'pubsub-js';

  export default {
    name: "Footer",
    props: {
      todos: {
        type: Array,
      }
    },

    computed: {
      completedTodo() {
        return this.todos.reduce((add, curr) => {
          return add + (curr.checked ? 1: 0)
        },0)
      },
      checkAll: {
        get() {
           if (this.todos.length) return this.completedTodo === this.todos.length
        },
        set(newVal) {
          this.$emit('checkAll', newVal)
        }
      }
    },
    methods: {
      delTodo() {
        this.$emit('delTodo')
      }
    },

  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
