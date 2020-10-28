<style lang="scss" scoped>

</style>
<template lang="pug">
  div
    router-link(tag="button" to='/')
      | Quit
    QuestionCard(:question="questionSorted" @change-question="numberOfQuestion++")
</template>
<script>
import QuestionsJson from '../assets/questions.json';
import QuestionCard from '../components/QuestionCard.vue';
export default {
  data() {
    return {
      questions: QuestionsJson,
      numberOfQuestion: 0,
    };
  },
  components: { QuestionCard },
  computed: {
    questionSorted() {
      const currentQuestion = this.questions[this.numberOfQuestion];
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