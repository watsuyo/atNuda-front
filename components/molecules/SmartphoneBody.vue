<template>
  <div class="text-center text-xl">
    <p>
      {{ '本サービスはPCでのみ' }}
    </p>
    <p>
      {{ 'ご利用いただけます。' }}
    </p>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props() {
    this.deviceType;
  },
  data() {
    return {
      // deviceType,
    }
  },
  created() {
    this.deviceType();
  },
  methods: {
    deviceType () {
      return this.$emit('deviceType', { deviceType: this.$ua.deviceType() });
      // const deviceType = this.$ua.deviceType();
      // if (deviceType === 'pc') {
      //   console.log('PCです');
      // } else {
      //   console.log(deviceType);
      // }
      // return deviceType;
    }
  }

}
</script>

<style>

</style>
