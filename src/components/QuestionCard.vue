<template lang="pug">
  div
    div(v-for="question in questionArray")
      | {{ question }}
</template>

<script>
export default {
//   data() {
//     return { listOfQuestions: questionArray };
//   },
  props: {
    questionArray: {
      type: Array,
      default: null,
    },
  },
};
</script>