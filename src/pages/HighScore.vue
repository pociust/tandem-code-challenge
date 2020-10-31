<style lang="sass" scoped>
  .title
    font-size: 50px
  .score-list
    font-size: 25px

    div:first-child
      color: #0ABAB5

    div:last-child
      color: #e86f6d

  .container
    transition: border 1s
    border: 50px solid #0a68ba
    border-radius: 20px
    padding: 50px

</style>

<template lang="pug">
  div(style="text-align: center" class="container")
    .title
      | High Scores!
    div(class="score-list")
      div(v-for="scores in highScores")
        | {{ scores.userName }} : {{ scores.totalScore}}

</template>
<script>
export default {
  data() {
    return { highScores: [] };
  },
  created() {
    this.highScores = JSON.parse(localStorage.getItem('score'));
  },
};
</script>