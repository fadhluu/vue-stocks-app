<template>
  <div class="row">
    <Stock v-for="stock in stocks" :key="stock.id" :stock=stock></Stock>
  </div>
</template>

<script>
import Stock from './Stock';

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: 'Twitter', price: 35 },
        { id: 2, name: 'Facebook', price: 40 },
        { id: 3, name: 'Instagram', price: 55 },
        { id: 4, name: 'Google', price: 25 },
      ],
    };
  },
  components: {
    Stock,
  },
};
</script>
