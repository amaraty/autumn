<template lang="pug">
  .container
    header
    h1 Блок "Обо мне"
    about

</template>

<script>
import header from './components/header';
import about from './components/about';

export default {
  name: 'app',
  components: {
    header, about
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="postcss">
  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;
    // width: 1490px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>