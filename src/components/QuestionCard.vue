<template lang="pug">
  div
    div
      | {{ question.question }}
    span(v-for="choice in question.choices")
      | {{ choice}}
    button(type="button" @click="changeQuestion")
      | test
</template>

<script>
export default {
  data() {
    return { numberOfQuestions: 0 };
  },
  props: {
    question: {
      type: Object,
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