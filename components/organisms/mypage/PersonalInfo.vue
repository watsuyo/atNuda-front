<template>
  <div>
    <div class="flex">
      <div class="flex-1 text-5xl text-right self-center text-centerpx-4">
        <img :src="user_icon" class="rounded-full h-32 w-32">
      </div>
      <div class="flex-1 text-center px-4 py-2 m-2">
        <div class="flex flex-col">
          <div class="text-left px-4 py-9 text-4xl">
            {{ $store.state.userName }}
            <!-- <i class="fas fa-cog text-2xl"></i> -->
          </div>
          <div class="text-left px-4 py-2 text-2xl">
            <a class="fab fa-twitter-square fa-blue text-xl" href="https://twitter.com/7_3isawa" />
            {{ '@' + $store.state.userName }}
          </div>
          <div class="text-left px-4 py-2 text-2xl">
            <a class="fab fa-github-square text-xl" href="https://github.com/3isawa" />
            {{ $store.state.userName }}
          </div>
        </div>
        <div class="flex mt-6">
          <div class="w-1/4 text-center ">ポジション:</div>
          <div class="w-3/4 flex">
            <multi-select-buttom text="フロント" class="mr-3"/>
            <multi-select-buttom text="デザイナー" class="mr-3" />
          </div>
        </div>
        <div class="flex my-6">
          <div class="w-1/4 text-center ">ステータス:</div>
          <div class="w-3/4 flex">
            <multi-select-buttom text="求職中" class="mr-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiSelectButton from '@/components/atoms/MultiSelectButton'
import DefaultButton from '@/components/atoms/DefaultButton'
import user_icon from '~/assets/user_icon.png'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

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
      userName: '3isawa',
      user_icon
    }
  },
  methods: {
  }
}
</script>

<style>
.fa-blue
{
	color: #1CA1F2;
}
</style>
