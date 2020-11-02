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
    router-link(tag="button" to="/")
      | Home
    .title
      | High Scores!
    div(style="margin-top: 20px" v-if="highScores.length === 0")
      | No High Scores! Be the First!
    div(class="score-list" v-if="highScores.length > 0")
      div(v-for="scores in sortScores")
        | {{ scores.userName }} : {{ scores.totalScore }}

</template>
<script>
export default {
  data() {
    return {
      highScores: [],
      message: false,
    };
  },
  created() {
    const checkStorage = JSON.parse(localStorage.getItem('score'));
    if (checkStorage) {
      this.highScores = checkStorage;
    } else {
      this.message = true;
    }
  },
  computed: {
    sortScores() {
      const scoreToSort = this.highScores;
      const sortFunction = (a, b) => {
        const scoreA = a.totalScore;
        const scoreB = b.totalScore;

        let comparison = 0;
        if (scoreA < scoreB) {
          comparison = 1;
        } else if (scoreA > scoreB) {
          comparison = -1;
        }
        return comparison;
      };
      return scoreToSort.sort(sortFunction);
    },
  },
};
</script>