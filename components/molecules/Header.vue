<template>
  <nav class="flex items-center justify-between flex-wrap text-black p-6">
    <div class="flex items-center flex-no-shrink text-black mr-6">
      <a class="font-semibold tracking-tight text-5xl" href="/">atNuda</a>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-lg lg:flex-grow">
        <p class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
          エンジニア向けポートフォリオ投稿・添削サービス
        </p>
      </div>
      <div>
        <div v-if="$store.state.common.isLogin">
          <a href="/portfolio/new" class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 fas fa-address-book">新規投稿</a>
          <a href="/mypage">
            <img :src="user_icon" class="rounded-full h-8 w-8">
          </a>
        </div>
        <div v-else>
          <a href="#" class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 fas fa-address-book">投稿</a>
          <a @click="login" class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">登録・ログイン</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import user_icon from '~/assets/user_icon.png'
  import Vue from 'vue'
  import VueI18n from 'vue-i18n'
  import axios from 'axios'
  export default {
    data: () => {
      return {
        user_icon
      }
    },
    methods: {
      async login () {
        await axios.post('http://35.189.159.191:3000/auth/twitter');
      }
    }   
  }
</script>


<style lang="scss">

</style>
