<template>
  <div class="w-3/4 border border-grey-light rounded-lg border-solid">
    <div class="flex mt-6">
      <div class="w-1/4 text-center ">ポジション</div>
      <div class="w-3/4 flex">
        
        <div @click="$store.dispatch('changeIsFront')">
          <multi-select-buttom text="フロント" class="mr-3"/>
        </div>
        <p>{{$store.state.position.front}}</p>

        <div @click="$store.dispatch('changeIsDesigner')">
          <multi-select-buttom text="デザイナー" class="mr-3" />
        </div>
        <p>{{$store.state.position.designer}}</p>

        <div @click="$store.dispatch('changeIsBack')">
          <multi-select-buttom text="バック" class="mr-3" />
        </div>
        <p>{{$store.state.position.back}}</p>

        <div @click="$store.dispatch('changeIsInfra')">
          <multi-select-buttom text="インフラ" class="mr-3" />
        </div>
        <p>{{$store.state.position.infra}}</p>

        <div @click="$store.dispatch('changeIsFullStack')">
          <multi-select-buttom text="フルスタック" class="mr-3" />
        </div>
        <p>{{$store.state.position.fullStack}}</p>

      </div>
    </div>
    <div class="flex my-6">
      <div class="w-1/4 text-center ">ステータス</div>
      <div class="w-3/4 flex">

        <div @click="$store.dispatch('changeIsLookingForAJob')">
          <multi-select-buttom text="求職中" class="mr-3" />
        </div>
        <p>{{$store.state.position.lookingForAJob}}</p>

        <div @click="$store.dispatch('changeIsUnderRecruitmentOfItems')">
          <multi-select-buttom text="案件募集中" class="mr-3" />
        </div>
        <p>{{$store.state.position.underRecruitmentOfItems}}</p>

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
  }
}
</script>

<style>

</style>
