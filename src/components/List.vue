<template>
  <transition-group tag="ul" class="todo-main" v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave">
    <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"></todo-item>
  </transition-group>
</template>

<script>
  import Item from './Item';
  import  Velocity  from 'velocity-animate';

  export default {
    name: "List",
    props:　{
      todos: {
        type: Array,
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            {opacity: 1, height: '1.6em'},
            {complete: done}
          )
        }, delay)
      },
      leave: function (el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
            el,
            {opacity: 0, height: 0},
            {complete: done}
          )
        }, delay)
      }
    },
    components: {
      'todo-item': Item
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
