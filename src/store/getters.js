export default {
  /**
   * u can do anything what u want the data
   **/
  saleProducts: state => {
    let saleProducts;
    saleProducts = state.products.map(product => {
      return {
        nama: "**" + product.nama + "**",
        harga: product.harga / 2
      }
    });
    return saleProducts;
  },

  elvantest() {
    console.log("elvan ganteng");
  }
}
