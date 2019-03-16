<template>
    <div>
      <input type="button" class="bg-main-color hover:bg-green-lighter text-white font-bold py-2 px-4 rounded" :value="text">
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
