<template>
  <div class="productView" v-if="product">
    <SingleProduct :product="product" :error="error" />
    <Comments />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import SingleProduct from "@/components/Product/SingleProduct.vue";
import Comments from "@/components/Product/Comments.vue";
import getDocument from "@/composables/getDocument";
export default {
  name: "Product",
  components: { SingleProduct, Comments },

  props: ["id"],

  setup(props) {
    const { document: product, error } = getDocument("products", props.id);

    return { product, error };
  },
};
</script>

<style lang="scss" scoped>
$main-light-1: #d9975c;
$main-light-2: #ab825f;
$main-dark-1: #455445;
$main-dark-2: #1e281e;
$text: #181f29;
$white: #fff;

$roboto: "Roboto Mono", monospace;
$SSP: "Source Sans Pro", sans-serif;

/* 
  FONTS: 
  font-family: 'Roboto Mono', monospace;
  font-family: 'Source Sans Pro', sans-serif;
*/

/* FONT-SIZES:
4.768rem/76.29px,
3.815rem/61.04px
3.052rem/48.83px,
2.441rem/39.06px,
1.953rem/31.25px,
1.563rem/25.00px,
1.25rem/20.00px,
1rem/16.00px,
0.8rem/12.80px,
0.64rem/10.24px,
0.512rem/8.19px
 */

.productView {
  padding: 6.4rem;
}
</style>