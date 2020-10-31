<style lang="sass" scoped>
    div
      margin-top: 45px
      &:first-child
        margin-top: 0px

  .score
    color: #0ABAB5
    border: 1px solid #0ABAB5
    padding: 5px
    margin-left: 5px
</style>

<template lang="pug">
  div(style="text-align: center")
    div
      | This is the end of round 1!
    div
      | Currently you have: #[span(class="score") {{ score }} points]

    div
      | Click below to start round 2

    div
      | Points are now double, but be careful...
    div
      | #[span(style="color: #e86f6d") Wrong] answers will lose you points!
    button(@click="beginRoundTwo")
      | Start Round 2
</template>
<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    beginRoundTwo() {
      this.$emit('start-round-two');
    },
  },
};
</script>