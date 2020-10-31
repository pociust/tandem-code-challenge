<style lang="sass" scoped>
  .regular-shadow
    transition: border 1s
    border: 50px solid #0a68ba
    border-radius: 20px

  .button-container
    display: flex
    flex-direction: row
    justify-content: center

  button
      border: 2px solid #0a68ba
      border-radius: 5px
      background-color: white
      padding: 10px
      margin: 10px
  button:hover
    background-color: #0a68ba
    color: white

</style>

<template lang="pug">
  div
    .regular-shadow
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