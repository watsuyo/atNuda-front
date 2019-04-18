<template>
  <div class="w-3/4 border border-grey-light rounded-lg border-solid">
    <div class="flex mt-6">
      <div class="w-1/4 text-center ">ポジション</div>
      <div class="w-3/4 flex">
        
        <div @click="addPosition('front')">
          <multi-select-buttom text="フロント" class="mr-3" />
        </div>

        <div @click="addPosition('designer')">
          <multi-select-buttom text="デザイナー" class="mr-3" />
        </div>

        <div @click="addPosition('back')">
          <multi-select-buttom text="バック" class="mr-3" />
        </div>

        <div @click="addPosition('infra')">
          <multi-select-buttom text="インフラ" class="mr-3" />
        </div>

        <div @click="addPosition('fullstack')">
          <multi-select-buttom text="フルスタック" class="mr-3" />
        </div>
        <p>{{$store.state.portfolio.positions}}</p>

      </div>
    </div>
    <div class="flex my-6">
      <div class="w-1/4 text-center ">ステータス</div>
      <div class="w-3/4 flex">

        <div @click="addStatus('searchJob')">
          <multi-select-buttom text="求職中" class="mr-3" />
        </div>

        <div @click="addStatus('underRecruitment')">
          <multi-select-buttom text="案件募集中" class="mr-3" />
        </div>
        <p>{{$store.state.portfolio.statuses}}</p>

      </div>
    </div>
    <div class="flex justify-center mb-6">
      <default-button text="ポートフォリオ検索"/>
    </div>
  </div>
</template>

<script>
import MultiSelectButton from '@/components/atoms/MultiSelectButton'
import DefaultButton from '@/components/atoms/DefaultButton'
export default {
  name: 'PortfolioSearchBox',
  components: {
    'multi-select-buttom': MultiSelectButton,
    'default-button':DefaultButton,
  },
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    addPosition (clickPosition) {
      const positionObject = {position: clickPosition}
      this.$store.dispatch('addPositionAction', positionObject)
    },
    addStatus (clickStatus) {
      const statusObject = {status: clickStatus}
      this.$store.dispatch('addStatusAction', statusObject)
    }
  }
}
</script>

<style>

</style>
