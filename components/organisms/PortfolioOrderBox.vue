<template>
  <div class="w-1/3 flex justify-around border border-grey-light rounded-full border-solid py-2 px-4 ">
      <default-buttom text="新着順"/>
      <default-buttom text="人気順" />
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
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
