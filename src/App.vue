<template lang="pug">
  #app
    router-view
</template>

<script>
import Landing from './pages/Landing.vue';
export default {
  name: 'App',
  components: { Landing },
};
</script>

<style lang="sass">

</style>