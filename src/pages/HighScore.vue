<template lang="pug">
  div
    | hello High Score {{ highScores }}

</template>
<script>
export default {
  data() {
    return { highScores: [] };
  },
  created() {
    this.highScores = localStorage.getItem('score');
  },
};
</script>