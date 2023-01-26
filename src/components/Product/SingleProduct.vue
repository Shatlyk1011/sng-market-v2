<template>
  <div class="product">
    <div class="container" v-if="product">
      <div class="image">
        <img :src="product.imageUrl" alt="" />
      </div>
      <div class="product__description">
        <div class="product__name">{{ product.title }}</div>
        <div class="product__seller">
          Продавец: <span> {{ product.userName }}</span>
        </div>
        <div class="product__rating">
          <five-stars />
          <span>(55 Ratings)</span>
        </div>
        <div class="product__price">{{ product.price }} RUB</div>
        <div class="product__text">
          <span>Описание:</span><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          recusandae blanditiis dolore possimus tenetur qui iusto perferendis
          ex, quisquam quod.
        </div>
        <div class="product__btns">
          <button class="btn product__btn product__btn--1">Заказать</button>
          <button class="btn product__btn product__btn--2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <title>Heart</title>
                <path
                  d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                />
              </svg>
              <div>Добавить в список желаемых</div>
            </span>
          </button>
        </div>
        <Availability
          availableText="Доставка доступна"
          unavailableText="Доставка недоступна"
        />
        <Availability
          availableText="ЭКО продукт"
          unavailableText="Продукт с добавками"
        />
      </div>
    </div>
    <div v-else>Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import FiveStars from "@/components/shared/Five-stars.vue";
import Availability from "@/components/shared/Availability.vue";
export default {
  name: "SingleProduct",
  components: { FiveStars, Availability },
  props: ["error", "product"],
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

.product {
  margin: 0 auto;
  line-height: 1;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;
    height: 100%;
    max-width: 120rem;
    margin: 0 auto;
    .image {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #f1f1f1;
      overflow: hidden;

      border-radius: 2px;
      margin: auto;
      border-radius: 1rem;

      img {
        object-fit: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        margin: auto;
      }
    }
  }
  &__description {
    line-height: 1.6;
  }
  &__name {
    font-size: 3.125rem;
    font-weight: 600;
    line-height: 1.2;
    font-family: $SSP;
    text-transform: capitalize;
  }
  &__seller {
    font-size: 1.24rem;
    line-height: 1.4;
    font-weight: 600;
    font-family: $SSP;
    margin-left: 1px;

    span {
      font-weight: 600;
      font-size: 1.24rem;
      border-bottom: 1px solid $main-light-2;
      color: $main-light-2;
      display: inline-block;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid transparent;
      }
    }
  }
  &__rating {
    display: flex;
    gap: 1rem;
    margin-top: 2.4rem;
    span {
      color: rgba($text, 0.5);
    }
  }
  &__price {
    font-size: 3.9rem;
    font-weight: 700;
    font-family: $SSP;
  }
  &__text {
    font-size: 1.6rem;

    & span {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
  &__btns {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3.2rem;
  }
  &__btn {
    text-align: center;
    padding: 1rem 1.6rem;
    font-size: 1.6rem;
    border-radius: 6px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:active {
      transform: translateY(2px) scale(0.95);
    }
    &--1 {
      background-color: $main-light-1;
      color: $white;

      &:hover {
        background-color: $main-light-2;
      }
    }
    &--2 {
      background-color: transparent;
      border: 1px solid rgba($main-dark-1, 0.2);
      &:hover {
        background-color: $main-dark-1;
        & > span {
          & > div {
            color: $white;
          }
          & > svg {
            stroke: $white;
            &:hover {
              fill: red;
              stroke: red;
            }
          }
        }
      }

      span {
        display: flex;
        gap: 1rem;
        justify-content: center;

        svg {
          fill: transparent;
          stroke: $main-dark-1;
          transition: transform 0.2s ease-in;
          &:active {
            transform: translateY(2px) scale(0.95);
          }
        }
      }
    }
  }
}
</style>