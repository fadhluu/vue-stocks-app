<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background: #45aaf2;">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/portfolio"
          tag="li"
          class="nav-item"
          activeClass="active"
          ><a class="nav-link">Portfolio</a></router-link
        >
        <router-link to="/stocks" tag="li" class="nav-item" activeClass="active"
          ><a class="nav-link">Stocks</a></router-link
        >
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <div class="nav-link disabled" style="color: white;">
            Funds: {{ funds | currency }}
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
        <li class="nav-item" style="cursor: pointer;">
          <a class="nav-link" @click="endDay">End of Day</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks();
    },
  },
  computed: {
    ...mapGetters(['funds']),
  },
};
</script>

<style></style>
