<style lang="sass" scoped>
  .quiz-flex
    display: flex
    justify-content: center

  .content-card
    margin: 50px
    border-radius: 10px
    height: 500px
    width: 500px
    position: relative

    .quiz-header
      position: absolute
      top: 0
      left: 0
      width: 100%
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center

      div
        margin-right: 5px

  .regular-shadow
    transition: border 1s
    border: 50px solid #0a68ba
    border-radius: 20px

  .right-shadow
    transition: border 1s
    border: 50px solid #0ABAB5
    border-radius: 20px

  .wrong-shadow
    transition: border 1s
    border: 50px solid #e86f6d
    border-radius: 20px

  .content-flex
    height: 100%
    display: flex
    justify-content: center
    align-items: center

</style>
<template lang="pug">
  .quiz-flex
    .content-card(:class="classShadow")
      .quiz-header
        router-link(tag="button" to="/")
          | Home
        div
          | Score: {{ score }}
      QuestionCard(
        v-if="!answerSelected"
        :question="randomizedQuestion"
        @answer="checkAnswer"
      )
      div(class="content-flex" v-if="answerSelected")
        AnswerCorrect(v-if="answerSelectedCorrect" :answer="answer")
        AnswerWrong(v-if="answerSelectedFalse" :answer="answer")
        RoundTwo(
          v-if="newRound && roundTwo && !finalRound && !displayFinalScore"
          @start-round-two="startRoundTwo" :score="score"
        )
        FinalRound(
          v-if="newRound && finalRound && !displayFinalScore"
          @wager="startFinalRound($event)"
          :score="score"
        )
        FinalScore(v-if="displayFinalScore" :score="score")
        div(style="text-align: center; font-size: 20px; padding: 5px" v-if="youLoseMessage")
          | I am sorry, you do not have enough points for final wager
          router-link(tag="button" to='/')
            | exit game
</template>
<script>
import QuestionsJson from '../assets/questions.json';
import QuestionCard from '../components/QuestionCard.vue';
import AnswerCorrect from '../components/AnswerCorrect.vue';
import AnswerWrong from '../components/AnswerWrong.vue';
import RoundTwo from '../components/RoundTwo.vue';
import FinalRound from '../components/FinalRound.vue';
import FinalScore from '../components/FinalScore.vue';
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
      displayFinalScore: false,
      youLoseMessage: false,
      wager: 0,
    };
  },
  components: {
    QuestionCard,
    AnswerCorrect,
    AnswerWrong,
    RoundTwo,
    FinalRound,
    FinalScore,
  },
  methods: {
    checkAnswer(answer) {
      this.answerSelected = true;
      this.answer = answer;
      if (answer.correct) {
        this.classShadow = 'right-shadow';
        this.answerSelectedCorrect = true;
        this.addScore();
        setTimeout(() => {
          this.classShadow = 'regular-shadow';
          this.answerSelectedCorrect = false;
          this.checkRound();
        }, 300);
      } else {
        this.addScore();
        this.classShadow = 'wrong-shadow';
        this.answerSelectedFalse = true;
        setTimeout(() => {
          this.classShadow = 'regular-shadow';
          this.answerSelectedFalse = false;
          this.checkRound();
        }, 300);
      }
    },
    checkRound() {
      if (this.numberOfQuestion < 9) {
        this.changeQuestion();
      } else if (this.numberOfQuestion === 9) {
        this.newRound = true;
        this.roundTwo = true;
      } else if (this.numberOfQuestion > 9 && this.numberOfQuestion < 19) {
        this.changeQuestion();
      } else if (this.numberOfQuestion === 19) {
        if (this.score <= 0) {
          this.youLoseMessage = true;
        } else {
          this.newRound = true;
          this.finalRound = true;
        }
      } else if (this.numberOfQuestion === 20) {
        this.displayFinalScore = true;
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
    startFinalRound(wager) {
      this.newRound = false;
      this.wager = wager;
      this.changeQuestion();
    },
    addScore() {
      if (this.roundTwo && !this.finalRound) {
        if (this.answerSelectedCorrect) {
          this.score += 2;
        } else {
          this.score -= 1;
        }
      } else if (this.finalRound) {
        if (this.answerSelectedCorrect) {
          this.score += this.wager;
        } else {
          this.score -= this.wager;
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