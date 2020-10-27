<style lang="scss" scoped>

</style>
<template lang="pug">
  div
    router-link(tag="button" to='/')
      | Quit
    QuestionCard(:questionArray="QuestionsJson")

</template>
<script>
import QuestionsJson from '../assets/questions.json';
import QuestionCard from '../components/QuestionCard.vue';
export default {
  data() {
    return { QuestionsJson };
  },
  components: { QuestionCard },
};
</script>