<style lang="sass" scoped>
  .quiz-flex
    display: flex
    justify-content: center

    button
      margin-left: 90%
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

  .content-flex
    height: 100%
    display: flex
    justify-content: center
    align-items: center

</style>
<template lang="pug">
  .quiz-flex
    div(class="content-card" :class="classShadow")
      router-link(tag="button" to='/')
        | Quit
      QuestionCard(
        v-if="!answerSelected"
        :question="randomizedQuestion"
        @answer="checkAnswer"
      )
      div(style="height: 100%" v-if="answerSelected")
        .content-flex(v-if="answerSelectedCorrect")
          AnswerCorrect(:answer="answer")
        .content-flex(v-if="answerSelectedFalse")
          AnswerWrong(:answer="answer")
        .content-flex(v-if="newRound")
          RoundTwo(@start-round-two="startRoundTwo" :score="score")
</template>
<script>
import QuestionsJson from '../assets/questions.json';
import QuestionCard from '../components/QuestionCard.vue';
import AnswerCorrect from '../components/AnswerCorrect.vue';
import AnswerWrong from '../components/AnswerWong.vue';
import RoundTwo from '../components/RoundTwo.vue';
export default {
  data() {
    return {
      questions: QuestionsJson,
      randomizedQuestions: [],
      numberOfQuestion: 0,
      answerSelected: false,
      answerSelectedCorrect: false,
      answerSelectedFalse: false,
      answer: '',
      score: 0,
      classShadow: 'regular-shadow',
      newRound: false,
      roundTwo: false,
      finalRound: false,
    };
  },
  components: {
    QuestionCard,
    AnswerCorrect,
    AnswerWrong,
    RoundTwo,
  },
  methods: {
    checkAnswer(answer) {
      this.answerSelected = true;
      this.answer = answer.answer;
      if (answer.correct) {
        this.classShadow = 'right-shadow';
        this.answerSelectedCorrect = true;
        this.addScore();
        setTimeout(() => {
          this.classShadow = 'regular-shadow';
          this.answerSelectedCorrect = false;
          this.checkRound();
        }, 3000);
      } else {
        this.addScore();
        this.classShadow = 'wrong-shadow';
        this.answerSelectedFalse = true;
        setTimeout(() => {
          this.classShadow = 'regular-shadow';
          this.answerSelectedFalse = false;
          this.checkRound();
        }, 3000);
      }
    },
    checkRound() {
      if (this.numberOfQuestion < 9) {
        this.changeQuestion();
      } else if (this.numberOfQuestion === 9) {
        this.roundTwo = true;
        this.newRound = true;
      } else if (this.numberOfQuestion > 9) {
        this.changeQuestion();
      }
    },
    changeQuestion() {
      this.answerSelected = false;
      this.numberOfQuestion += 1;
    },
    startRoundTwo() {
      this.newRound = false;
      this.changeQuestion();
    },
    addScore() {
      if (this.roundTwo) {
        if (this.answerSelectedCorrect) {
          this.score += 2;
        } else {
          this.score -= 1;
        }
      } else {
        if (this.answerSelectedCorrect) {
          this.score += 1;
        }
      }
    },
  },
  beforeMount() {
    const questionsArray = this.questions;
    const questionsArrayRandomized = questionsArray.sort(() => Math.random() - 0.5);
    this.randomizedQuestions = questionsArrayRandomized;
  },
  computed: {
    randomizedQuestion() {
      const currentQuestion = this.randomizedQuestions[this.numberOfQuestion];
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