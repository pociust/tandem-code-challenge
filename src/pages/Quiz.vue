<style lang="sass" scoped>
  .quiz-flex
    display: flex
    justify-content: center

    button
     height: 50px
     width: 50px

  .content-card
    margin: 50px
    border-radius: 10px
    height: 500px
    width: 500px

  .regular-shadow
    box-shadow: 0px 1px 3px 50px blue

  .right-shadow
    box-shadow: 0px 1px 3px 50px green

  .wrong-shadow
    box-shadow: 0px 1px 3px 50px red

</style>
<template lang="pug">
  .quiz-flex
    router-link(tag="button" to='/')
      | Quit
    div(class="content-card" :class="classShadow")
      QuestionCard(
        v-if="!answerSelected"
        :question="questionSorted"
        @correct="answeredCorrectly"
        @wrong="answeredIncorrectly"
      )
      div(v-if="answerSelected")
        div(v-if="answerSelectedCorrect")
          AnswerCorrect(:answer="answer")
        div(v-if="answerSelectedFalse")
          AnswerWrong(:answer="answer")
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
      answer: '',
      classShadow: 'regular-shadow',
    };
  },
  components: {
    QuestionCard,
    AnswerCorrect,
    AnswerWrong,
  },
  methods: {
    answeredCorrectly(answer) {
      this.classShadow = 'right-shadow';
      this.answer = answer;
      this.answerSelected = true;
      this.answerSelectedCorrect = true;
      setTimeout(() => {
        this.classShadow = 'regular-shadow';
        this.answerSelectedCorrect = false;
        this.answerSelected = false;
        this.numberOfQuestion += 1;
      }, 3000);
    },
    answeredIncorrectly(answer) {
      this.classShadow = 'wrong-shadow';
      this.answer = answer;
      this.answerSelected = true;
      this.answerSelectedFalse = true;
      setTimeout(() => {
        this.classShadow = 'regular-shadow';
        this.answerSelectedFalse = false;
        this.answerSelected = false;
        this.numberOfQuestion += 1;
      }, 3000);
    },
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