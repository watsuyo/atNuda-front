
<template>
    <div>
      <input type="button" class="bg-transparent hover:bg-green-lighter text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded" :value="text">
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
