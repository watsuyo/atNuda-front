<template>
    <div>
      <input type="checkbox" class="hidden" id="btn" />
      <label class="block bg-transparent text-grey hover:text-main-color border border-grey-dark hover:border-main-color py-1 px-3 rounded-full" for="btn">{{text}}</label>
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
