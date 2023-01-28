<template>
  <div class="market">
    <div class="market__container">
      <div class="market__quantity">
        <div class="pages">
          Текущая страница <span>{{ currentPage }}</span> из
          <span>{{ maxPage }}</span>
        </div>
        <div>
          Показано
          <span>{{ displayedProducts ? displayedProducts.length : null }}</span>
          из
          <span>{{ products ? products.length : null }}</span>
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
            class="pages"
            v-if="nextPage"
            :to="{ name: 'MarketView', query: { page: nextPage } }"
            >Вперед</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import ProductItem from "@/components/Market/Product-Item.vue";
import Footer from "@/components/Home/Footer.vue";

import getCollection from "@/composables/getCollection";
import useCurrentPage from "@/composables/useCurrentPage";
import usePrevAndNextPages from "@/composables/usePrevAndNextPages";

import { ref, computed } from "vue";
export default {
  name: "Market",
  components: { ProductItem, Footer },

  setup() {
    const { products, error } = getCollection("products");

    const search = ref("");

    const currentPage = useCurrentPage();

    console.log("currentPage", currentPage.value);

    const maxPage = computed(() => {
      console.log("maxPage", maxPage.value);
      return Math.ceil(products.value ? products.value.length : 1 / 6);
    });

    const { previousPage, nextPage } = usePrevAndNextPages(
      currentPage.value,
      maxPage
    );

    const displayedProducts = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 6;
      const lastJobIndex = pageNumber * 6;
      return products.value
        ? products.value.slice(firstJobIndex, lastJobIndex)
        : null;
    });

    return {
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
.market {
  max-width: 160rem;
  padding: 10rem;
  margin: 0 auto;
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
}
</style>