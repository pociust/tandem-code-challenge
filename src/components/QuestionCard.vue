<style lang="sass" scoped>
  .question-card
    border: 1px solid black
    height: 150px
    width: 300px
</style>

<template lang="pug">
  div(class="question-card")
    div
      | {{ question.question }}
    span(v-for="choice in question.choices")
      | {{ choice}}
    button(type="button" @click="changeQuestion")
      | test
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
  },
};
</script>