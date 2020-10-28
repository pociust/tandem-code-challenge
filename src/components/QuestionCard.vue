<template lang="pug">
  div
    div(v-for="(question, index) in questionArray")
      div(v-if="index === numberOfQuestions")
        | {{ question.question }}
        div
          | {{ question.incorrect }} {{ question.correct }}
    button(type="button" @click="changeQuestion")
      | test
</template>

<script>
export default {
  data() {
    return { numberOfQuestions: 0 };
  },
  props: {
    questionArray: {
      type: Array,
      default: null,
    },
  },
  methods: {
    changeQuestion(number) {
      this.numberOfQuestions += 1;
    },
  },
};
</script>