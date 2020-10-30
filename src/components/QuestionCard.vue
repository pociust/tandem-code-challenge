<style lang="sass" scoped>
  .question-card-flex
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-around
    align-content: space-around

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
    font-size: 19px

  .answer-choices:hover
      background-color: blue
      color: white
      padding: 5px
      cursor: pointer
</style>

<template lang="pug">
  .question-card-flex
    .question-title
      | {{ question.question }}
    .answer-flex
      div(
        class="answer-choices"
        v-for="choice in randomizedChoices"
        @click="selectAnswer(choice)"
      )
        | {{ choice }}
</template>

<script>
export default {
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
    selectAnswer(answer) {
      if (this.question.correctAnswer === answer) {
        this.$emit('answer', { correct: true, answer: answer });
      } else {
        this.$emit('answer', { correct: false, answer: answer });
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