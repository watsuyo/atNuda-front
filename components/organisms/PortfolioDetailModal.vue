<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click.self="closeSelf">
          <div class="modal-container">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-grey-lighter">
                <div class="flex justify-between">
                  <div class="flex items-center mt-2 mx-2">
                    <figure class="rounded-full">
                      <img class="rounded-full" :src="portfolio.user.user_small_images_url" width="48" height="48">
                    </figure>
                    <div class="text-center font-bold text-xl ml-2">
                      {{ portfolio.user.name }}
                    </div>
                  </div>
                  <default-button :text="portfolio.user.status" class="my-2 mx-2" /> 
                </div>
              <div class="px-3 py-4">
                <p class="text-base">
                {{ portfolio.portfolio_comment }}
                </p>
              </div>
              <div>
                <carousel :per-page="1" :adjustable-height="true" :autoplay="false" :loop="true" :autoplay-timeout="5000">
                  <slide v-for="(image_url, index) in portfolio.image_urls" :key="index">
                    <a :href="portfolio.site_url">
                      <img :src="image_url" alt="Placeholder image">
                    </a>
                  </slide>
                </carousel>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex justify-start w-4/5">
                  <default-button text="コメント" class="ml-2" />
                  <default-button text="アドバイス" class="ml-2" />
                </div>
                <div class="flex justify-around mr-5 items-center w-1/5">
                  <div class="navbar-item">
                    <a class="block mr-4">
                      <i class="fa fa-heart fa-lg text-main-color"/>
                      <span>{{ portfolio.like }}</span>
                    </a>
                  </div>
                  <a class="fab fa-twitter-square fa-lg text-main-color"></a>
                </div>
              </div>
              <div class="mt-3">
                <div v-if="isAdvice">
                  <div v-for="(correction, index) in portfolio.corrections" :key="index">
                    <comment-block :img="portfolio.user.user_small_images_url" :text="correction.correction"/>
                  </div>
                </div>
                <div v-else>
                  <div v-for="(comment, index) in portfolio.comments" :key="index">
                    <comment-block :img="portfolio.user.user_small_images_url" :text="comment.comment"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import DefaultButton from '~/components/atoms/DefaultButton'
import CommentBlock from '~/components/molecules/CommentBlock'
import HogeImage from '~/assets/England_Houses_Rivers_Bridges_Marinas_Evening_546553_1280x777.jpg'

export default {
  components: {
    Carousel,
    Slide,
    'default-button': DefaultButton,
     CommentBlock
  },
  props: {
    portfolio: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
    showModal: false,
    isAdvice: true
    }
  },
  methods: {
    closeSelf() {
      this.$emit("closeSelf")
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  height: 1000px;
  margin: 0px auto;
  padding: 20px 100px;
  border-radius: 2px;
  transition: all .5s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
}

</style>
