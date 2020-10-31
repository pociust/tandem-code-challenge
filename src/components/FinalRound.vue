<style lang="sass" scoped>
  .answer-wrong-flex
    text-align: center
    display: flex
    height: 100%
    flex-direction: column
    justify-content: space-evenly
    font-size: 20px

</style>
<template lang="pug">
  .answer-wrong-flex
    div #[strong Final Round]
    div
      | Your score is: #[span(class="score") {{ score }}]

    div
      | For the last question you get to wager your points
    div
      | If you get it #[span(style="color: #0ABAB5") right] you gain the points,
    div
      | answer #[span(style="color: #e86f6d") wrong] and you lose the points
    form
      div(v-show="wagerAlert" style="color: #e86f6d")
        | you do not have enough points!
      input(type="number" placehold="points" v-model="wager")
      button(type="button" @click="wagerPoints")
        | Wager
</template>

<script>
export default {
  data() {
    return {
      wager: 0,
      wagerAlert: false,
    };
  },
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    wagerPoints() {
      if (this.wager < 0 || this.wager > this.score) {
        this.wagerAlert = true;
        setTimeout(() => {
          this.wagerAlert = false;
        }, 3000);
      } else {
        this.$emit('wager', parseInt(this.wager));
      }
    },
  },
};
</script>