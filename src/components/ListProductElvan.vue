<template>
  <div id="list-product-elvan">
    <h2>Elvan Product</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.nama}}</span>
        <span class="price">{{product.harga}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      /**
       * get Data product from State
       **/
      products(){
        return this.$store.state.products;
      },

      /**
       * get Data products from Getters
       **/
      saleProducts(){
       return this.$store.getters.saleProducts;
      }
    }
  }
</script>

<style scoped>
  #list-product-elvan{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #list-product-elvan ul{
    padding: 0;
  }
  #list-product-elvan li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
  }
  .price{
    font-weight: bold;
    color: #E8800C;
  }

</style>
