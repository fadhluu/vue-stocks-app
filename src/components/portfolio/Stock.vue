<template>
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card mt-4 text-white" style="border-color: #45aaf2;">
      <div class="card-header" style="background: #45aaf2;">
        {{ stock.name }}
        <small>
          (Price: ${{ stock.price }} | Quantity: {{ stock.quantity }})</small
        >
      </div>
      <div class="card-body">
        <div class="form-row">
          <div class="col-lg-10 col-md-10 col-sm-12">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :max="stock.quantity"
            />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12">
            <button
              class="btn btn-warning"
              @click="sellStock"
              :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock',
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
};
</script>
