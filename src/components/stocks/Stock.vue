<template>
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card mt-4 text-white" style="border-color: #45aaf2;">
      <div class="card-header" style="background: #45aaf2;">
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: this.icon_name }"
        />
        {{ stock.name }}
        <small> (Price: ${{ stock.price }})</small>
      </div>
      <div class="card-body">
        <div class="form-row">
          <div class="col-8">
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{ 'is-invalid': insufficientFunds }"
            />
          </div>
          <div class="col-4">
            <button
              class="btn"
              :class="insufficientFunds ? 'btn-danger' : 'btn-primary'"
              @click="buyStock"
              :disabled="
                insufficientFunds ||
                  quantity <= 0 ||
                  !Number.isInteger(+quantity)
              "
              style="width: 100%"
            >
              {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
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
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    },
  },
  created() {
    this.icon_name = this.stock.name.toLowerCase();
  },
};
</script>
