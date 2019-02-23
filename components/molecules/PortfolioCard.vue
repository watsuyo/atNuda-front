<template>
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
          <a class="button is-primary" @click="showModal"><i class="fas fa-comment has-text-white"></i>コメントを見る</a>
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
    <portfolio-detail-modal :isActive="modalActive" :portfolio="portfolio" @set="closeModal"></portfolio-detail-modal>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import PortfolioDetailModal from "~/components/organisms/PortfolioDetailModal"
import HogeImage from '~/assets/England_Houses_Rivers_Bridges_Marinas_Evening_546553_1280x777.jpg';

export default {

  name: 'PortfolioCard',
  data () {
    return {
      img: HogeImage,
      modalActive: false
    }
  },
  props: {
    portfolio: {
      type: Object,
      required: true,
      default: {}
    }
  },
  methods: {
    showModal: function() {
      this.modalActive = true
    },
    closeModal: function() {
      this.modalActive = false
    }
  },
  components: {
    Carousel,
    Slide,
    "portfolio-detail-modal" :PortfolioDetailModal
  }
}
</script>

<style>

</style>
