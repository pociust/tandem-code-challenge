<template lang="pug">
  #app
    router-view
</template>

<script>
export default { name: 'App' };
</script>

<style lang="sass">
  #app
    font-family: 'Asap', sans-serif

  button
    border: 2px solid #0a68ba
    border-radius: 5px
    background-color: white
    padding: 10px
    margin: 5px
    cursor: pointer
    &:hover
      background-color: #0a68ba
      cursor: pointer
      color: white
</style>