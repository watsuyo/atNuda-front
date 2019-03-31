<template>
  <div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
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
        <carousel :per-page="1" :adjustable-height="true" :autoplay="true" :loop="true" :autoplay-timeout="5000">
          <slide v-for="(image_url, index) in portfolio.image_urls" :key="index">
            <a :href="portfolio.site_url">
              <img :src="image_url" alt="Placeholder image">
            </a>
          </slide>
        </carousel>
      </div>
      <div class="flex justify-between items-center mb-2">
        <a class="button is-primary" @click="showModal"><default-button text="コメントを見る" class="ml-5"/></a>
        <div class="flex justify-around mr-5 items-center">
          <div class="navbar-item">
            <a class="block mr-4">
              <i class="fa fa-heart fa-lg text-main-color"/>
              <span>{{ portfolio.like }}</span>
            </a>
          </div>
          <a class="fab fa-twitter-square fa-lg text-main-color"></a>
        </div>
      </div>
    </div>
    <portfolio-detail-modal :portfolio="portfolio"  v-if="isModal" @closeSelf="closeModal"/>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import PortfolioDetailModal from '~/components/organisms/PortfolioDetailModal'
import DefaultButton from '~/components/atoms/DefaultButton'
import HogeImage from '~/assets/England_Houses_Rivers_Bridges_Marinas_Evening_546553_1280x777.jpg'

export default {

  name: 'PortfolioCard',
  components: {
    Carousel,
    Slide,
    'portfolio-detail-modal': PortfolioDetailModal,
    'default-button': DefaultButton
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
      img: HogeImage,
      isModal: false
    }
  },
  methods: {
    showModal: function () {
      this.isModal = true
    },
    closeModal: function () {
      this.isModal = false
    }
  }
}
</script>

<style>

</style>
