<template>
  <div>
    <section>
      <div>
        <p>{{ "本サービスはPCでのみご利用いただけます。" }}</p>
      </div>
    </section>
  </div>
</template>

<script>
// import Footer from '../components/molecules/Footer'
// import Header from '../components/molecules/Header'

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
    const deviceType = this.$ua.deviceType();
    if (deviceType === 'pc') {
      console.log('PCです');
    } else {
      console.log(deviceType);
    }
    return deviceType;
  },
  methods() {
  }

}
</script>

<style>

</style>
