<style lang="scss" scoped>

</style>
<template lang="pug">
  div
    router-link(tag="button" to='/')
      | Quit
    div
      | {{ questions }}

</template>
<script>
import Questions from '../assets/questions.json';
export default {
  data() {
    return { questions: Questions };
  },
};
</script>