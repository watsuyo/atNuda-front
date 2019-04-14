<template>
  <paginate
    v-model="page"
    :page-count="pagingNum"
    :page-range="3"
    :margin-pages="1"
    :click-handler="clickCallback"
    :prev-text="'＜'"
    :next-text="'＞'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
</template>
 
<script>
export default {
  data() {
    return {
      page: 1
    }
  },
  computed: {
    pagingNum() {
      return this.$store.state.paging.portfolioPageCount
    }
  }
}
</script> 