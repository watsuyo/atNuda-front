<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/molecules/Footer.vue'
import Header from '~/components/molecules/Header.vue'

export default {
  components: {
    Footer,
    Header
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