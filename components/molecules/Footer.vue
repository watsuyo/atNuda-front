<template>
  <body>
    <div>
      <!-- 仕方なくcdn -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      
      <footer class="footer">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="">
                <!-- タイトルは画像にする -->
              <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
              <p class="is-size-1">atNuda</p>
              <p class="is-size-6 subtitle">エンジニア向けポートフォリオ投稿・添削サービス</p>
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="icons">
                  <div class="navbar-item">
                    <p class="is-size-6 announce">ご意見・ご質問はDMで</p>
                    <a class="button is-medium is-size-6 is-black">
                      <i class="fab fa-twitter"></i>
                      <strong class="newPost">atNuda公式アカウント</strong>
                    </a>
                  </div>
                  <div class="navbar-item">
                    <p class="is-size-6 announce">このサイトをシェア</p>
                    <a class="button is-medium is-size-6 is-black">
                      <i class="fab fa-twitter"></i>
                      <strong class="newPost">ツイート</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
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
  @import "../../node_modules/bulma/bulma.sass";
  .footer {
    display: inline-block;
  }
  footer {
    width: 80%;
  }
  .item {
  }
  .announce {
  }
</style>
