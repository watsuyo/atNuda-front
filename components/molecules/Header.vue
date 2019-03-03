<template>
  <body>
    <!-- 仕方なくcdn -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <Header>
      <ul id="app">
        <div class="nav-top">
          <!-- タイトルは画像にする -->
          <li class="logo">atNuda</li>
          <li class="subtitle">エンジニア向けポートフォリオ投稿・添削サービス</li>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div v-if="isLogin" class="icons">
          <li>
            <strong class="newPost">新規投稿</strong>
            <i class="fas fa-user-circle"></i>
          </li>
        </div>
        <ul v-else class="icons">
          <li>
            <i class="fas fa-address-card"></i>
            <strong class="newPost">投稿</strong>
          </li>
          <li>
            <i class="fas fa-sign-in-alt"></i>
            <strong class="newPost">登録・ログイン</strong>
          </li>
          <li>
            <i class="fas fa-user-circle"></i>
          </li>
        </ul>
      </ul>
    </Header>   
  </body>
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add()

export default {
    
  }
</script>


<style lang="scss">
  body {
    width: 100%;
    text-align: center;
  }
  Header {
    display: flex;
  }
  .nav-top {
    display: flex;
  }
  ul {
    list-style: none;
    display: flex;
  }
  .logo {
    text-align: left;
    font-size: 300%;
  }
  .subtitle {
    font-size: 150%;
  }
  .icons {
    display: flex;
  }
</style>
