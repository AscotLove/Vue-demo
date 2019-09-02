<template>
  <input type="text" v-model.trim="msg" @keydown.enter="handleKeydown">
</template>

<script>
  export default {
    name: "Header",
    props: {

    },
    data() {
      return {
        msg: '',
        id: 3,
      }
    },
    methods: {
      handleKeydown() {
        const todo = {
          id: this.id++,
          text: this.msg,
          checked: false
        };
        this.$emit('click', todo)
      }
    }

  }
</script>

<style scoped>

</style>
