<template>
    <div>
      <input type="checkbox" class="hidden" id="btn" />
      <label class="block bg-transparent text-grey hover:text-main-color border border-grey-dark hover:border-main-color py-1 px-3 rounded-full" for="btn">{{text}}</label>
    </div>
</template>

<script>
export default {
  name: 'PortfolioSearchBox',
  components: {
  },
  props: {
    text: String
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
/* label{
  padding:5px;
  border: 1px solid plum;
  border-radius: 5px;
}
input{
  display: none;
}
.check_box:checked + .label {
  background-color: orange;
} */
</style>
