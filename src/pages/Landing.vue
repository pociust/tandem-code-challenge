<style lang="sass" scoped>
  .regular-shadow
    transition: border 1s
    border: 50px solid #0a68ba
    border-radius: 20px

  .button-container
    display: flex
    flex-direction: row
    justify-content: center

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