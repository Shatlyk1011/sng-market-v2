<template>
  <div class="product">
    <div class="product__img-container">
      <router-link
        class="product__title"
        :to="{ name: 'ProductView', params: { id: product.id } }"
      >
        <img :src="product.imageUrl" alt="" class="product__img" />
      </router-link>
    </div>
    <div class="product__name">
      <router-link
        class="product__title"
        :to="{ name: 'ProductView', params: { id: product.id } }"
        >{{ product.title }}</router-link
      >
      <ion-icon class="product__icon" name="heart"></ion-icon>
    </div>
    <div class="product__rating">
      <FiveStars />
      <span>55 Ratings</span>
    </div>
    <div class="product__price">{{ product.price }} RUB</div>
  </div>
</template>

<script>
import FiveStars from "../shared/Five-stars.vue";
export default {
  name: "Product-item",
  props: ["product"],
  components: {
    FiveStars,
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
.product {
  &__img-container {
    width: 28rem;
    height: 28rem;
    background-color: #fefefe;

    position: relative;
    box-sizing: content-box;
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
  &__title {
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: 600;
    font-family: $SSP;
    text-transform: capitalize;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      font-weight: 700;
      // font-size: 1.7rem;
      color: #000;
    }
    &:active {
      transform: translateY(1px) scale(0.95);
    }
  }

  &__name {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
  }
  &__icon {
    width: 1.8rem;
    height: 1.8rem;
    color: $main-dark-1;

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: red;
    }
    &:active {
      transform: translateY(3px) scale(0.9);
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.28rem;
    font-weight: 600;
    letter-spacing: -0.6px;
  }
  &__price {
    font-family: $SSP;
    font-weight: 500;
  }
}
</style>