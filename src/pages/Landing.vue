<style lang="sass" scoped>
  .button-container
    margin-top: 50px
  .button-container button
    padding: 20px
    background-color: blue
</style>

<template lang="pug">
  div
    Header
    div.button-container
      router-link(tag="button" to="/quiz")
        | Start
      router-link(tag="button" to="/highscore")
        | High Score
</template>

<script>
import Header from '../components/Header';
export default { components: { Header } };
</script>