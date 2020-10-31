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
    &:hover, &:active, &:focus
      outline: none
      border: 2px solid #0a68ba
      border-radius: 5px
      background-color: #0a68ba
      cursor: pointer
      color: white

  .score
    color: #0ABAB5
    border: 1px solid #0ABAB5
    border-radius: 5px
    padding: 5px
    margin-left: 5px
</style>