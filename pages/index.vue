<template>
  <div>
    <header_/>
    <main>
      <section class="section">
        <portfolio-search-box />
      </section>
      <section class="section">
        <div class="column">
          <div class="buttons is-centered">
            <a class="button">新着順</a>
            <a class="button">人気順</a>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="columns has-background-white">
          <div class="column is-4 is-offset-1">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            <portfolio-card :portfolio="portfolio" />
            </div>
            <div class="w-2/5 my-10 mx-auto">
            </div>
          </div>
       <pagination />
      </section>
    </main>
    <footer_/>
  </div>
</template>

<script>
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'
import PortfolioOrderBox from '../components/organisms/PortfolioOrderBox'
import Pagination from '../components/molecules/Pagination'
import AssetsImage from '@/assets/England_Houses_Rivers_Bridges_Marinas_Evening_546553_1280x777.jpg'

export default {
  components: {
    'portfolio-card': PortfolioCard,
    'portfolio-search-box': PortfolioSearchBox,
    'header_': Header,
    'footer_': Footer,
    'portfolio-order-box': PortfolioOrderBox,
    'pagination': Pagination
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
