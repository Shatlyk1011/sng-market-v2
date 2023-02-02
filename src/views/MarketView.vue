<template>
  <div class="market">
    <div class="market__container" v-if="products">
      <div class="market__quantity">
        <div class="pages">
          Текущая страница <span>{{ currentPage }}</span> из
          <span>{{ maxPages }}</span>
        </div>
        <div>
          Показано
          <span>{{ displayedProducts.length }}</span>
          из
          <span>{{ products.length }}</span>
        </div>
      </div>

      <div class="grid">
        <ProductItem
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
            v-if="nextPage"
            class="pages"
            :to="{ name: 'MarketView', query: { page: nextPage } }"
            >Вперед</router-link
          >
        </div>
      </div>
    </div>
    <LoadingPage v-else />
  </div>
  <Footer />
</template>

<script>
import ProductItem from "@/components/Market/Product-Item.vue";
import Footer from "@/components/Home/Footer.vue";
import LoadingPage from "@/components/shared/LoadingPage.vue";

import getCollection from "@/composables/getCollection";

import { computed, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Market",
  components: { ProductItem, Footer, LoadingPage },

  setup() {
    const { products, error } = getCollection("products");

    const route = useRoute();

    const currentPage = computed(() => {
      const pageString = route.query.page || "1";
      return Number.parseInt(pageString);
    });

    const previousPage = computed(() => {
      const prevPage = currentPage.value - 1;
      const firstPage = 1;
      return prevPage >= firstPage ? prevPage : null;
    });

    const maxPages = computed(() => {
      return Math.ceil(products.value.length / 10);
    });

    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1;
      const maxPage = Math.ceil(products.value.length / 10);
      return nextPage <= maxPage ? nextPage : null;
    });

    const displayedProducts = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return products.value.slice(firstJobIndex, lastJobIndex);
    });

    return {
      products,
      error,
      displayedProducts,
      currentPage,
      previousPage,
      nextPage,
      maxPages,
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
  max-width: 144rem;
  padding: 10rem;
  margin: 0 auto;
  @media (max-width: 87em) {
    padding: 8rem 4rem;
  }

  &__container {
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
}
</style>