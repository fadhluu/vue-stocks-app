<template>
  <div class="container">
    <Header></Header>
    <div class="row mt-2">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>
