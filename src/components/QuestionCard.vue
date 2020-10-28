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