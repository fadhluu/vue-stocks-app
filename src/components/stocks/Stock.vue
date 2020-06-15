<template>
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card mt-4 text-white" style="border-color: #ffda79;">
      <div class="card-header" style="background: #ffda79; color: #cc8e35;">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: this.icon_name }"
        />
        {{ stock.name }}
        <small> (Price: ${{ stock.price }})</small>
      </div>
      <div class="card-body">
        <div class="form-row">
          <div class="col-lg-10 col-md-10 col-sm-12">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
            />
          </div>
          <div class="col-lg-2 col-md-2 col-sm-12">
            <button
              class="btn"
              @click="buyStock"
              :disabled="quantity <= 0 || !Number.isInteger(+quantity)"
              style="background: #ffb142; color: white;"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
      icon_name: '',
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.quantity = 0;
    },
  },
  created() {
    this.icon_name = this.stock.name.toLowerCase();
  },
};
</script>
