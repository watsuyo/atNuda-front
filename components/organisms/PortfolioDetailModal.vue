<template>
  <div class="modal" v-bind:class="{'is-active':modalActives}">
    <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content has-text-centered">
            <p class="control">
              <div class="card is-shady">
                <nav class="navbar">
                  <div class="navbar-start">
                      <div class="media u-my-auto u-ml-5">
                        <figure class="image is-48x48">
                          <img class="is-rounded" :src="portfolio.user.user_small_images_url" width="48" height="48">
                        </figure>
                      </div>
                    <div class="navbar-item">
                      <span class="u-valign-m is-size-5">{{portfolio.user.name}}</span>
                    </div>
                  </div>
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <div class="has-background-primary tag">
                        <i class="fas fa-flag fa-lg has-text-white"></i>
                        <span class="has-text-white">{{portfolio.user.status}}</span>
                      </div>
                    </div>
                  </div>
                </nav>
                <div class="card-content">
                  <div class="content">
                    {{portfolio.portfolio_comment}}
                  </div>
                </div>
                <div class="card-image">
                    <carousel :per-page="1" :adjustableHeight="true" :autoplay="true" :loop="true" :autoplayTimeout=5000>
                      <slide v-for="(image_url, index) in portfolio.image_urls" :key="index">
                        <a :href="portfolio.site_url">
                          <img :src="image_url" alt="Placeholder image">
                        </a>
                      </slide>
                    </carousel>
                </div>
                <nav class="navbar">
                  <div class="navbar-start">
                    <div class="navbar-item">
                      <a class="button is-primary" @click=""><i class="fas fa-comment has-text-white"></i>コメント</a>
                    </div>
                    <div class="navbar-item">
                      <a class="button is-primary" @click=""><i class="fas fa-volume-up has-text-white"></i>アドバイス</a>
                    </div>
                  </div>
                  <div class="navbar-end">
                    <div class="navbar-item">
                      <a>
                        <i class="fa fa-heart has-text-primary"></i>
                        <span>{{portfolio.like}}</span>
                      </a>
                    </div>
                    <div class="navbar-item">
                      <a>
                        <i class="fab fa-twitter has-text-primary"></i>
                      </a>
                    </div>
                  </div>
                </nav>
                <div id="message-contents">
                  <!-- ▼メッセージ一個ぶんの表示 -->
                  <div v-for="comment in portfolio.comments" class="message-wrapper is-clearfix">
                      <div class="box">
                          <div class="content">
                              <p>
                              <!-- <strong>{{message.userName}}</strong> <small>{{displayTime(message)}}</small> -->
                              <!-- <br /> -->
                              {{comment.comment}}
                              </p>
                          </div>
                      </div>
                  </div>
                  <!-- ▲メッセージ一個ぶんの表示 -->
              </div>

              <!-- ▼メッセージ入力部分 -->
              <footer>
                  <div class="field is-grouped">
                      <div class="control is-expanded">
                          <input v-model="message" v-on:keydown.enter="" class="input is-medium" type="text" placeholder="Message" />
                      </div>
                      <div class="control control-submit">
                          <button v-bind:disabled!=null v-on:click="" class="button is-primary button-submit">送信</button>
                      </div>
                  </div>
              </footer>
              </div>
            </p>
          </div>
        </div>
      </div>
      <button @click="$emit('set')" class="modal-close"></button>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  data () {
    return {
      message:""
    }
  },
  props: {
    isActive: {
      type: Boolean,
      defalt: false,
      required: true
    },
    portfolio: {
      type: Object,
      required: true,
      default: {}
    }
  },
  computed: {
    modalActives: function() {
      return this.isActive
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
header{
    position:fixed;
    width:100%;
    background:#00d1b2;
    z-index:2;
    height:55px;
}

#app header h1{
    padding-left:10px;
    padding-top:8px;
    color:#ffffff;
}

.chaturl{
    padding-left:10px;
}

.chaturl a{
    color:#ffffff;
    font-size:14px;
}

.chaturl a:hover{
    text-decoration: underline;
}

.button-submit{
    height:45px;
    line-height:1.0;
    width:100%;
}

.control-submit{
    width:20%;
}

#message-contents{
    z-index:1;
    padding: 55px 10px 76px 10px;
    background:#ffffff;
}

.message-wrapper{
    margin:20px 10px;
}

.message-wrapper .box{
    float:left;
}
.message-wrapper .box.mymessage{
    float:right;
}

.mymessage p{
    text-align: right;
}
</style>
