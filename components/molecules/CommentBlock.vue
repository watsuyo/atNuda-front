<template>
  <div class="flex flex-row items-center">
    <img class="rounded-full w-12 h-12 m-2" :src="img" width="48" height="48" />
    <div class="flex items-center bg-grey-light w-4/5 h-12"> {{text}} </div>
  </div>
</template>

<script>
export default {
  name: 'CommentBlock',
  components: {
  },
  props: {
    img: String,
    text: String,
  }
}
</script>

<style>

</style>
