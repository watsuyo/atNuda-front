<template>
  <div class="w-1/3 flex justify-around border border-grey-light rounded-full border-solid py-2 px-4 ">
    <div @click="tabValueMyPost">
      <default-buttom text="自分の投稿" />
    </div>
    <div @click="tabValueLike">
      <default-buttom text="いいね済" />
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/atoms/DefaultButton'
export default {
  name: 'PortfolioSearchBox',
  components: {
    'default-buttom': DefaultButton
  },
  props: {
    tabValue: String
  },
  data() {
    return {
      tabValue: 1
    }
  },
  methods: {
    tabValueMyPost() {
      this.tabValue = 1
    },
    tabValueLike() {
      this.tabValue = 2
    },
  },
  watch() {
    this.$emit('tabValueMyPost', this.tabValue);
    this.$emit('tabValueLike', this.tabValue);
  }
}
</script>

<style scoped>

</style>
