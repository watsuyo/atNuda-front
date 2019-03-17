<template>
  <div id="app">
    <header_/>
    <footer_/>
  </div>
</template>

<script>
import footer from '../components/molecules/Footer'
import header from '../components/molecules/Header'

export default {
  components: {
    'header_': Header,
    'footer_': Footer
  }
}
</script>

<style>
/* #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
} */

</style>