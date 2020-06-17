<template>
  <div class="row" v-if="stocks.length > 0">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
  <div v-else>
    <div class="row">
      <div class="col-12">
        <div class="card mt-4">
          <div class="card-body">
            <h4 class="card-title">Nothing to show</h4>
            <p class="card-text">
              You have no stocks right now.<br />Go buy
              <router-link to="/stock" class="card-link">Stocks</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio',
    }),
  },
  components: {
    Stock,
  },
};
</script>
