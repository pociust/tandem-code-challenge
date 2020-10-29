<style lang="sass" scoped>
  .question-card
    display: flex
    flex-direction: column
    justify-content: space-around
    align-content: space-around
    border: 1px solid black
    height: 500px
    width: 500px

  .question-title
    font-size: 35px
    margin: 5px
    text-align: center

  .answer-flex
    display: flex
    justify-content: space-around

  .answer-choices
    border: 1px solid blue
    border-radius: 10px
    padding: 5px

  .answer-choices:hover
      background-color: blue
      color: white
      padding: 5px
      cursor: pointer
</style>

<template lang="pug">
  .question-card
    .question-title
      | {{ question.question }}
    .answer-flex
      div(
        class="answer-choices"
        v-for="choice in randomizedChoices"
        @click="selectedAnswer(choice)"
      )
        | {{ choice }}
</template>

<script>
export default {
  data() {
    return { choices: [] };
  },
  props: {
    question: {
      type: Object,
      default: null,
    },
  },
  methods: {
    changeQuestion() {
      this.$emit('change-question');
    },
    selectedAnswer(answer) {
      if (this.question.correctAnswer === answer) {
        console.log('correct');
      } else {
        console.log('incorrect');
      }
    },
  },
  computed: {
    randomizedChoices() {
      const choicesToBeSorted = this.question.choices;
      return choicesToBeSorted.sort(() => Math.random() - 0.5);
    },
  },
};
</script>