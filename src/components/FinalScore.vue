<style lang="sass" scoped>
  .final-score-flex
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-evenly

  .score
    color: #0ABAB5
    border: 1px solid #0ABAB5
    border-radius: 10px
    padding: 5px
    margin-left: 5px

  .button-flex
    display: flex
    flex-direction: row
    justify-content: space-evenly

    button
      border: 2px solid #0a68ba
      border-radius: 5px
      background-color: white
      padding: 10px
      margin: 5px
    button:hover
      background-color: #0a68ba
      cursor: pointer
      color: white

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
      form
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
      window.localStorage.setItem(this.userName, this.score);
      this.$router.push('/');
    },
  },
};
</script>