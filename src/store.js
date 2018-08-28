import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  /**
   * Data product on state and the prop is nama and harga
   **/
  state: {
    products: [
      {nama: 'ASUS', harga: '600'},
      {nama: 'MAC', harga: '1000'},
      {nama: 'Lenovo', harga: '550'},
      {nama: 'ACER', harga: '400'},
      {nama: 'Thosiba', harga: '460'}
    ]
  },
  getters: {
    /**
     * u can do anything what u want the data
     **/
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          nama: "**" + product.nama + "**",
          harga: product.harga / 2
        }
      });
      return saleProducts;
    }

  },
  mutations: {
    /**
     * SetTimeout out context on mutations
     **/
    // kurangiHarga: state => {
    //   setTimeout(function () {
    //     state.products.forEach(product => {
    //       product.harga -= 1;
    //     });
    //   },3000);
    // }

    /**
     * the action 'kurangiHarga' for the produce the data on state using the payload
     **/
    kurangiHarga: (state, payload) => {
      state.products.forEach(product => {
              product.harga -= payload;
            });
    }
  },
  actions: {
    /**
     *  SetTimeout on Actions and for dispatch
     **/
    kurangiHarga: (context, payload) => {
      setTimeout(function () {
        context.commit('kurangiHarga', payload);
      },2000)
    }
  }
});
