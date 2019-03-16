<template>
    <div>
      <input type="button" class="bg-main-color hover:bg-green-lighter text-white font-bold py-2 px-4 rounded" :value="text">
    </div>
</template>

<script>
export default {
  name: 'PortfolioSearchBox',
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>
