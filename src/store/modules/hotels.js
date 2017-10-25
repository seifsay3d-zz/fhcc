import hotels from '../../data/hotels';
import * as types from '../mutation-types';

// initial state
const state = {
  orginal: hotels,
  all: hotels,
};

// getters
const getters = {
  allProducts: function allProducts(state) {
    return state.all;
  },
};

// actions
const actions = {
};

// mutations
const mutations = {
  [types.SORT_HOTELS](state, payload) {
    const dir = (payload.dir === 'Asc') ? -1 : 1;
    state.all.sort((a, b) => {
      const aBestOffer = a.offers.find(e => e.isBest === true);
      const bBestOffer = b.offers.find(e => e.isBest === true);
      if (aBestOffer[payload.field] < bBestOffer[payload.field]) {
        return dir;
      }
      return dir * -1;
    });
  },
  [types.FILTER_HOTELS](state, payload) {
    const filteredHotels = state.orginal.filter((item) => {
      if (payload.field === 'totalRate') {
        const bestOffer = item.offers.find(e => e.isBest === true);
        return bestOffer[payload.field] <= payload.value;
      }
      return item[payload.field] <= payload.value;
    });
    state.all = filteredHotels;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
