export default {
  /**
   *  SetTimeout on Actions and for dispatch
   **/
  kurangiHarga: (context, payload) => {
    setTimeout(function () {
      context.commit('kurangiHarga', payload);
    },2000)
  }
}
