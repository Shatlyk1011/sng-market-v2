<template>
  <div class="productView" v-if="product">
    <SingleProduct :product="product" :error="error" />
    <Comments />
  </div>
  <LoadingPage v-else />
</template>

<script>
import SingleProduct from "@/components/Product/SingleProduct.vue";
import Comments from "@/components/Product/Comments.vue";

import LoadingPage from "@/components/shared/LoadingPage.vue";

import getDocument from "@/composables/getDocument";
export default {
  name: "Product",
  components: { SingleProduct, Comments, LoadingPage },

  props: ["id"],

  setup(props) {
    const { document: product, error } = getDocument("products", props.id);

    return { product, error };
  },
};
</script>

<style lang="scss" scoped>
.productView {
  padding: 6.4rem;

  @media (max-width: 56em) {
    padding: 4.8rem 2.4rem;
  }
}
</style>