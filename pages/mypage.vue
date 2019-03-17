<template>
  <div id="app">
    <header/>
    <footer/>
  </div>
</template>

<script>
import footer from '../components/molecules/Footer'
import header from '../components/molecules/Header'

export default {
  components: {
    'header': Header,
    'footer': Footer
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