<template>
  <div class="w-1/3 flex justify-around border border-grey-light rounded-full border-solid py-2 px-4 ">
    <div @click="$store.dispatch('changeToLike')">
      <div v-if="$store.state.common.tabValue === 1">
        <default-buttom text="自分の投稿" />
      </div>
      <div v-else>
        <inactive-button text="自分の投稿" />
      </div>
    </div>
    <div @click="$store.dispatch('changeToMyPost')">
      <div v-if="$store.state.common.tabValue === 2">
        <default-buttom text="いいね済" />
      </div>
      <div v-else>
        <inactive-button text="いいね済" />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/atoms/DefaultButton'
import InactiveBbutton from '@/components/atoms/InactiveButton'

export default {
  name: 'PortfolioSearchBox',
  components: {
    'default-buttom': DefaultButton,
    'inactive-button': InactiveBbutton
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
