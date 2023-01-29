<template>
  <div class="market">
    <div class="market__container">
      <div class="credentials">
        <div class="name">
          Привет <span> {{ user.displayName }}</span>
        </div>
        <img :src="user.photoURL" alt="" />
      </div>
      <h2>Здесь находятся все ваши товары которые вы выставили</h2>
      <div v-if="displayedProducts && displayedProducts.length">
        <div class="market__quantity">
          <div class="pages">
            Текущая страница <span>{{ currentPage }}</span> из
            <span>{{ maxPage }}</span>
          </div>
          <div>
            Показано
            <span>{{
              displayedProducts ? displayedProducts.length : null
            }}</span>
            из
            <span>{{ products ? products.length : null }}</span>
          </div>
        </div>

        <div class="grid">
          <Product
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="error" v-if="error">{{ error }}</div>
        <div class="pagination">
          <div class="pagination__btns">
            <router-link
              class="pages"
              v-if="previousPage"
              :to="{ name: 'MarketView', query: { page: previousPage } }"
            >
              Назад</router-link
            >
            <router-link
              class="pages"
              v-if="nextPage"
              :to="{ name: 'MarketView', query: { page: nextPage } }"
              >Вперед</router-link
            >
          </div>
        </div>
      </div>

      <div class="no-products" v-else>
        <h3>
          Вы еще ничего не добавляли. Что бы добавить свой продукт нажмите
          <router-link class="link" :to="{ name: 'CreateProductView' }"
            >сюда</router-link
          >
        </h3>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Product from "@/components/Market/Product-Item.vue";
import Footer from "@/components/Home/Footer.vue";

import getCollection from "@/composables/getCollection";
import useCurrentPage from "@/composables/useCurrentPage";
import usePrevAndNextPages from "@/composables/usePrevAndNextPages";
import getUser from "@/composables/getUser";

import { ref, computed } from "vue";
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

    const search = ref("");

    const currentPage = useCurrentPage();
    const maxPage = computed(() => {
      console.log("maxPage", maxPage.value);
      return Math.ceil(products.value ? products.value.length : 1 / 10);
    });

    const { previousPage, nextPage } = usePrevAndNextPages(
      currentPage,
      maxPage
    );

    const displayedProducts = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return products.value
        ? products.value.slice(firstJobIndex, lastJobIndex)
        : null;
    });

    return {
      user,
      products,
      error,
      displayedProducts,
      currentPage,
      previousPage,
      nextPage,
      maxPage,
      search,
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
.market {
  max-width: 160rem;
  padding: 10rem;
  margin: 0 auto;
  &__container {
    .credentials {
      background-color: rgba($main-light-1, 0.1);
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      display: flex;
      max-height: 10rem;
      max-width: 35rem;
      justify-content: start;
      gap: 2.4rem;
      justify-content: center;
      align-items: center;

      .name {
        font-family: $SSP;
        font-size: 2.5rem;
        span {
          font-weight: 600;
          border-bottom: 1px solid $main-dark-2;
        }
      }

      img {
        border-radius: 100%;
        width: 7rem;
        height: 7rem;
        object-fit: cover;
      }
    }
    &__quantity {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: space-between;
      span {
        color: $main-light-1;
        font-weight: 600;
      }

      & .pages {
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3.2rem;
      margin-top: 2.4rem;
    }

    .pagination {
      margin-top: 3.2rem;
      &__btns {
        display: flex;
        gap: 1rem;
        align-items: center;

        & .pages {
          padding: 0.6rem 1.2rem;
          background-color: $main-dark-1;
          color: $white;
          font-size: 1.28rem;
          font-weight: 600;
          letter-spacing: -0.5px;
          text-decoration: none;
          border-radius: 1rem;
        }
      }
    }

    & .no-products {
      margin-top: 3rem;

      h3 {
        color: $main-light-1;

        span {
          color: $main-light-2;
          border-bottom: 1px solid;
        }
      }
    }
  }
}
</style>