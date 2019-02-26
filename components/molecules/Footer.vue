<template>
  <body>
    <!-- 仕方なくcdn -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      
    <footer>
      <ul>
        <div class="nav-top">
            <!-- タイトルは画像にする -->
          <li class="logo">atNuda</li>
          <li class="subtitle">エンジニア向けポートフォリオ投稿・添削サービス</li>
        </div>
        <div class="nav-bottom">
          <ul class="twitter">
            <li>ご意見・ご質問はDMで</li>
            <li>
              <i class="fab fa-twitter"></i>
              <strong class="newPost">atNuda公式アカウント</strong>
            </li>
          </ul>
          <ul class="twitter">
            <li class="is-size-6 announce">このサイトをシェア</li>
            <li>
              <i class="fab fa-twitter"></i>
              <strong class="newPost">ツイート</strong>
            </li>
          </ul>
        </div>
      </ul>
    </footer>
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
Footer {
  display: flex;
  margin-top: auto;
}
ul .twitter {
  display: flex;
}
.nav-bottom {

}
</style>
