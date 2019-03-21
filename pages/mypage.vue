<template>
  <div>
    <header_ />
    <main class="container mx-auto">
      <personal-info class="mx-auto mb-10" />
      <mypage-order-box class="mx-auto px-6" />
      <section>
        <div class="flex flex-wrap justify-start mx-auto">
          <div class="w-2/5 my-10 mx-auto">
          <portfolio-card :portfolio="portfolio" />
          </div>
          <div class="w-2/5 my-10 mx-auto">
          <portfolio-card :portfolio="portfolio" />
          </div>
        </div>
      </section>
      <div class="mx-auto px-6">
        <back-to-top class="mx-auto px-6" />
      </div>
    </main>
    <footer_ />
  </div>
</template>

<script>
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'
import OrderBox from '../components/organisms/mypage/OrderBox'
import PersonalInfo from '../components/organisms/mypage/PersonalInfo'
import PortfolioCard from '../components/molecules/PortfolioCard'
import Pagination from '../components/molecules/Pagination'
import BackToTop from '../components/atoms/BackToTop'
import AssetsImage from '@/assets/England_Houses_Rivers_Bridges_Marinas_Evening_546553_1280x777.jpg'

export default {
  components: {
    'portfolio-card': PortfolioCard,
    'personal-info': PersonalInfo,
    'header_': Header,
    'footer_': Footer,
    'mypage-order-box': OrderBox,
    'pagination': Pagination,
    'back-to-top': BackToTop,
  },
  data() {
    return {
      portfolio:
      { 'uuid': 'portxxxxx1',
        'site_url': 'https://site-example.com/1',
        'image_urls': [AssetsImage, AssetsImage, AssetsImage],
        'portfolio_comment': '俺の渾身のポートフォリオサイト、みんな見てくれよな！俺の渾身のポートフォリオサイト、みんな見てくれよな！',
        'comments': [{ 'myself': true, 'comment': '私のコメント' }, { 'myself': false, 'comment': '誰かのコメント' }],
        'corrections': [{ 'myself': true, 'correction': '添削への返信' }, { 'myself': false, 'correction': '誰かの添削コメント' }],
        'like': 4,
        'user':
        { 'name': 'john',
          'position': ['フロントエンド', 'バックエンド', 'デザイナー'],
          'status': '戦闘中',
          'user_small_images_url': 'https://bulma.io/images/placeholders/96x96.png' }
      }
    }
  }
}
</script>

<style>

</style>
