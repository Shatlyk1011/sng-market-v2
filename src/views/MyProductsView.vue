<template>
  <div class="myProducts">
    <div class="container">
      <div class="credentials">
        <h2 class="name">
          Товары <span> {{ user.displayName }}</span>
        </h2>
        <img :src="user.photoURL" alt="" />
      </div>
      <div v-if="products && products.length">
        <h3>
          Здесь находятся все ваши товары которые вы выставили. При желании, вы
          можете <em>удалить</em>, <em>изменить</em> их нажав на соответствующий
          товар
        </h3>
        <div class="grid">
          <Product
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="error" v-if="error">{{ error }}</div>
      </div>

      <div class="no-products" v-else>
        <h4>
          Вы еще ничего не добавляли. Что бы добавить свой продукт нажмите
          <router-link class="link" :to="{ name: 'CreateProductView' }"
            >сюда</router-link
          >
        </h4>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Product from "@/components/Market/Product-Item.vue";
import Footer from "@/components/Home/Footer.vue";

import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";

export default {
  name: "Market",
  components: { Product, Footer },

  setup() {
    const { user } = getUser();

    const { products, error } = getCollection("products", [
      "userUid",
      "==",
      user.value.uid,
    ]);
    console.log("products", products.value);

    return {
      user,
      products,
      error,
    };
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
.myProducts {
  max-width: 160rem;
  padding: 10rem;
  margin: 0 auto;
  @media (max-width: 87em) {
    padding: 6rem 4rem;
  }
  .container {
    text-align: center;
    h3 {
      margin: 0 auto;
      width: 50rem;
    }
    .credentials {
      border-radius: 1rem;
      display: flex;
      justify-content: start;
      gap: 2.4rem;
      justify-content: center;
      align-items: center;

      .name {
        font-family: $SSP;
        font-size: 3.1rem;
        font-weight: 500;
        span {
          font-weight: 600;
          color: $main-dark-1;
          border-bottom: 1px solid $main-dark-1;
        }
      }

      img {
        border-radius: 100%;
        width: 7rem;
        height: 7rem;
        object-fit: cover;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 3.2rem;
      row-gap: 1.6rem;
      margin-top: 2.4rem;
      @media (max-width: 78em) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 47em) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 31em) {
        grid-template-columns: 1fr;
      }
    }

    & .no-products {
      margin-top: 3rem;
      padding: 1rem 2rem;
      background-color: $main-dark-1;
      border-radius: 8px;
      display: inline-block;

      h4 {
        color: $white;

        .link {
          color: $main-light-1;
          padding-bottom: 4px;
          font-weight: 600;
          border-bottom: 1px solid inherit;
        }
      }
    }
  }
}
</style>