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
    div(v-for="choice in randomizedChoices")
      | {{ choice }}
      button(type="button" @click="changeQuestion")
        | test
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
  },
  computed: {
    randomizedChoices() {
      const choicesToBeSorted = this.question.choices;
      return choicesToBeSorted.sort(() => Math.random() - 0.5);
    },
  },
};
</script>