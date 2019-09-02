<template>

  <li >
    <input type="checkbox" checked="todo.checked">
    {{todo.text}}
  </li>
</template>

<script>
  export default {
    name: "Item",
    props: {
      todo: {
        type: Object,
      }
    },

  }
</script>

<style scoped>

</style>
