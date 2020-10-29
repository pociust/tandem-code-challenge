<style lang="sass" scoped>
  .quiz-flex
    display: flex
    justify-content: center

    button
     height: 50px
     width: 50px

</style>
<template lang="pug">
  .quiz-flex
    router-link(tag="button" to='/')
      | Quit
    div(v-if="!answerSelected")
      QuestionCard(:question="questionSorted" @change-question="numberOfQuestion++")
    div(v-if="answerSelected")
      div(v-if="answerSelectedCorrect")
        AnswerCorrect
      div(v-if="answerSelectedFalse")
        AnswerWong
</template>
<script>
import QuestionsJson from '../assets/questions.json';
import QuestionCard from '../components/QuestionCard.vue';
import AnswerCorrect from '../components/AnswerCorrect.vue';
import AnswerWrong from '../components/AnswerWong.vue';
export default {
  data() {
    return {
      questions: QuestionsJson,
      numberOfQuestion: 0,
      answerSelected: false,
      answerSelectedCorrect: false,
      answerSelectedFalse: false,
    };
  },
  components: {
    QuestionCard,
    AnswerCorrect,
    AnswerWrong,
  },
  computed: {
    questionSorted() {
      const questionsArray = this.questions;
      const questionsArrayRandomized = questionsArray.sort(() => Math.random() - 0.5);
      const currentQuestion = questionsArrayRandomized[this.numberOfQuestion];
      const choices = currentQuestion.incorrect.concat(currentQuestion.correct);
      const reconstructedQuestion = {
        question: currentQuestion.question,
        choices: choices,
        correctAnswer: currentQuestion.correct,
      };
      return reconstructedQuestion;
    },
  },
};
</script>