<template>
  <nav class="flex items-center justify-between flex-wrap text-black p-6">
    <div class="flex items-center flex-no-shrink text-black mr-6">
      <span class="font-semibold tracking-tight text-5xl">atNuda</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-black hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-lg lg:flex-grow">
        <p class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
          エンジニア向けポートフォリオ投稿・添削サービス
        </p>
      </div>
      <div>
        <div v-if="isLogin">
          <a href="#" class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 fas fa-address-book">新規投稿</a>
          <img :src="user_icon" class="rounded-full h-8 w-8">
        </div>
        <div v-else>
          <a href="#" class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0 fas fa-address-book">投稿</a>
          <a href="#" class="inline-block text-lg px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">登録・ログイン</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import user_icon from '~/assets/user_icon.png'
  export default {
    data: () => {
      return {
        isLogin: true,
        user_icon
      }
    }    
  }
</script>


<style lang="scss">

</style>
