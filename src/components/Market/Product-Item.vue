<template>
  <div class="product">
    <div class="product__img-container">
      <router-link :to="{ name: 'ProductView', params: { id: product.id } }"
        ><img :src="product.imageUrl" alt="" class="product__img"
      /></router-link>
    </div>
    <div class="product__description">
      <div class="product__name">
        <div class="product__title">{{ product.title }}</div>
        <span title="Добавить в избранное">
          <ion-icon class="product__icon" name="heart"></ion-icon>
        </span>
      </div>
      <div class="product__rating">
        <FiveStars :average="average" @click="handleModal" />
        <span :title="`Оставлено ${totalLength} оценок`"
          >{{ totalLength }} оценок</span
        >
      </div>
      <div class="product__price" title="Цена за килограмм">
        {{ product.price }} RUB
      </div>
    </div>
  </div>
</template>

<script>
import FiveStars from "../shared/Five-stars.vue";

import getAverageStars from "@/composables/getAverageStars";
export default {
  name: "Product-item",
  props: ["product"],
  components: {
    FiveStars,
  },

  setup(props) {
    const { average, length: totalLength } = getAverageStars(
      props.product.stars
    );
    return { average, totalLength };
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

.product {
  &__img-container {
    width: 100%;
    min-height: 30rem;
    background-color: #fefefe;
    position: relative;
    box-sizing: content-box;

    @media (max-width: 68em) {
      min-height: 27rem;
    }
  }
  &__img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    padding: 0.3rem;
    border-radius: 1rem;
    user-select: none;

    cursor: pointer;

    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-5px) scale(1.02);
    }

    &:active {
      transform: translateY(5px) scale(0.95);
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 30rem;
    margin: 0 auto;
    margin-top: 1.6rem;
  }
  &__title {
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: 600;
    font-family: $SSP;
    text-transform: capitalize;
    transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &__name {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
  }

  span {
    &:hover > .product__icon {
      color: red;
    }
    &:active > .product__icon {
      transform: translateY(2px) scale(0.85);
    }
  }
  &__icon {
    width: 1.8rem;
    height: 1.8rem;
    color: $main-dark-1;
    pointer-events: none;

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
    }
    &:active {
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.28rem;
    font-weight: 600;
    letter-spacing: -0.6px;

    & span {
      cursor: help;
    }
  }
  &__price {
    font-size: 1.4rem;
    font-family: $SSP;
    font-weight: 600;
    text-align: left;
    padding: 8px 12px;
    line-height: 1.2;
    border-radius: 8px;
    background-color: $main-dark-1;
    color: $white;
    align-self: start;
  }
}
</style>