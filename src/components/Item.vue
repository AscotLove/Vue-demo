<template>
  <li>
    <label>
      <slot name="inputSlot" :index="index" :id="todo.id">
        <input type="checkbox" v-model="checked">
      </slot>
      <slot name="spanSlot" :text="todo.text">
        {{todo.text}}
      </slot>
    </label>
    <button @click="delTodo">删除</button>
  </li>
</template>

<script>
  import { publish } from 'pubsub-js';

  export default {
    name: "Item",
    props: {
      todo: {
        type: Object,
        index: Number,
      }
    },

    computed: {
      checked: {
        get() {
          return this.todo.checked
        },
        set(newVal) {
          publish('checkedChange', {id: this.todo.id, checked: newVal})
        }
      }
    },
    methods: {
      delTodo() {
        publish('delTodo', this.todo.id)
      }
    },

  }

</script>

<style scoped>
  li.highlight {
    background: pink;
  }

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
