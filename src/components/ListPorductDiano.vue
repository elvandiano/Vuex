<template>
  <div id="list-product-diano">
    <h2>Diano Product</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.nama}}</span>
        <span class="price">{{product.harga}}</span>
      </li>
    </ul>
    <button v-on:click="kurangiHarga(2)">Mengurangi Harga</button>
  </div>
</template>

<script>

  /**
   * import mapAction and mapGetters from vuex
   **/
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      /**
       * get Data product from State
       **/
      dataProducts() {
        return this.$store.state.products;
      },

      /**
       * get Data products from Getters
       **/
      /*saleProducts() {
        return this.$store.getters.saleProducts;
      },*/

      /**
       * get Data products using MapGetter from VUEX
       **/
      ...mapGetters([
        'saleProducts'
      ])
    },
    methods: {
      /**
       * commit data state Products from Mutations
       *
       * dispatch data state Products from Actions
       **/
      /*kurangiHarga(amount) {
       /!* this.$store.state.products.forEach( product => {
          product.harga -= 20;
        });*!/
       // this.$store.commit("kurangiHarga");
        this.$store.dispatch("kurangiHarga",amount);
      }*/

      /**
       * dispatch data state Products using MapAction from VUEX
       **/
      ...mapActions([
        'kurangiHarga'
      ])
    }

  }
</script>

<style scoped>
  #list-product-diano {
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }

  #list-product-diano ul {
    padding: 0;
    list-style-type: none;
  }

  #list-product-diano li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }

  .price {
    font-weight: bold;
    color: #860CE8;
    display: block;
  }

</style>
