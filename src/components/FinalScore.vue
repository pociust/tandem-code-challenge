<style lang="sass" scoped>
  .final-score-flex
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-evenly

  .button-flex
    display: flex
    flex-direction: row
    justify-content: space-evenly

    input
      width: 100px
      height: 33px
      border: 2px solid #0a68ba
      border-radius: 5px
</style>

<template lang="pug">
  .final-score-flex
    div(style="font-size: 40px")
      | Your final score is: #[span(class="score") {{ score }}]
    .button-flex
      router-link(tag="button" to="/")
        | Home
      form(v-if="score > 0 ")
        input(type="text" placeholder="Username" v-model="userName")
        button(@click.prevent="submitUser")
          | Submit score
</template>

<script>
export default {
  data() {
    return { userName: '' };
  },
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    submitUser() {
      const userScore = { userName: this.userName, totalScore: this.score };
      let previousScore = JSON.parse(localStorage.getItem('score'));
      if (previousScore) {
        previousScore = previousScore.concat(userScore);
      } else {
        previousScore = [ userScore ];
      }
      window.localStorage.setItem('score', JSON.stringify(previousScore));
      this.$router.push('/highscore');
    },
  },
};
</script>