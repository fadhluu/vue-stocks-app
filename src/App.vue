<template>
  <div class="container">
    <Header></Header>
    <div class="row mt-2">
      <div class="col-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
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
  },
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 250ms forwards ease-out;
}

.slide-leave-active {
  animation: slide-out 250ms forwards ease-out;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
