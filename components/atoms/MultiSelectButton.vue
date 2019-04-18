<template>
    <div>
      <div class="block bg-transparent text-grey hover:text-main-color border border-grey-dark hover:border-main-color py-1 px-3 rounded-full" for="btn">{{text}}</div>
    </div>
</template>

<script>
export default {
  name: 'MultiSelectButton',
  props: {
    text: String
  }
}
</script>

<style scoped>
</style>
