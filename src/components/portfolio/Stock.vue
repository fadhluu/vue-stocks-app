<template>
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card mt-4 text-white" style="border-color: #45aaf2;">
      <div class="card-header" style="background: #45aaf2;">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: this.icon_name }"
        />console.log
        {{ stock.name }}
        <small>
          (Price: ${{ stock.price }} | Quantity: {{ stock.quantity }})</small
        >
      </div>
      <div class="card-body">
        <div class="form-row">
          <div class="col-8">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              min="0"
              :max="stock.quantity"
            />
          </div>
          <div class="col-2">
            <button
              class="btn btn-warning"
              @click="sellStock"
              :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
              style="width: 100%;"
            >
              Sell
            </button>
          </div>
          <div class="col-2">
            <button class="btn btn-danger" @click="sellAllStock">
              Sell All
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
      icon_name: '',
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
    sellAllStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.stock.quantity,
      };
      this.placeSellOrder(order);
    },
  },
  created() {
    this.icon_name = this.stock.name.toLowerCase();
  },
};
</script>
