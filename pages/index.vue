<template>
  <div>
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
          <div class="column is-4 is-offset-2">
            <portfolio-card :portfolio="portfolio" />
          </div>
        </div>
        <div class="columns has-background-white u-pt-20">
          <div class="column is-10 is-offset-1">
            <nav class="pagination is-centered">
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                  <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import PortfolioCard from '../components/molecules/PortfolioCard'
import PortfolioSearchBox from '../components/organisms/PortfolioSearchBox'
import AssetsImage from '@/assets/England_Houses_Rivers_Bridges_Marinas_Evening_546553_1280x777.jpg'

export default {
  components: {
    'portfolio-card': PortfolioCard,
    'portfolio-search-box': PortfolioSearchBox
  },
  data() {
    return {
      portfolio:
      { 'uuid': 'portxxxxx1',
        'site_url': 'https://site-example.com/1',
        'image_urls': [AssetsImage, AssetsImage, AssetsImage],
        'portfolio_comment': '俺の渾身のポートフォリオサイト、みんな見てくれよな！',
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
