<style lang="sass" scoped>
  .round-2-flex
    text-align: center

    div
      margin-top: 45px

    button
      border: 2px solid #0a68ba
      border-radius: 5px
      background-color: white
      padding: 10px
      margin-top: 50px
    button:hover
      background-color: #0a68ba
      color: white

  .score
    color: #0ABAB5

  .wrong
    color: #e86f6d
</style>

<template lang="pug">
  .round-2-flex
    div
      | This is the end of round 1!
    div
      | Currently you have:
      span(class="score")  {{ score }} points

    div
      | Click below to start round 2

    div
      | Points are now double, but be careful,
      .wrong wrong answers will lose you points!
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