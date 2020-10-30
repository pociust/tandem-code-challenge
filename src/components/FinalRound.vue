<template lang="pug">
  div
    div
      | Final Round
    div
      | so far your score is{{ score }}

    div
      | the last round you get to wager your points, if you get it right you gain the points,
    div
      | answer wrong and you lose the points
    form
      input(type="number" placehold="points" v-model="wager")
      button(type="button" @click="wagerPoints")
        | Wager
      div(v-if="wagerAlert")
        | you do not have enough points!
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
        this.$emit('wager', this.wager);
      }
    },
  },
};
</script>