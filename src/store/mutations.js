export default {
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
}
