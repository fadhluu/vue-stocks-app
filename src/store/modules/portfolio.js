const state = {
  stocks: [],
  funds: 10000,
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    if (quantity * stockPrice <= state.funds) {
      const record = state.stocks.find(element => element.id == stockId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity,
        });
      }
      state.funds -= quantity * stockPrice;
    } else {
      alert('Funds not enough, please order again');
    }
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (quantity <= record.quantity) {
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.funds += quantity * stockPrice;
    } else {
      alert('Cant sell more');
    }
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds: state => state.funds,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
