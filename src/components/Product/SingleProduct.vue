<template>
  <div class="product">
    <div class="container" v-if="product">
      <div class="image">
        <img :src="product.imageUrl" alt="" />
      </div>
      <div class="product__description">
        <div style="display: flex; justify-content: space-between; gap: 1rem">
          <div class="product__name">{{ product.title }}</div>
          <div class="product__active-btns">
            <router-link
              v-if="owner"
              :to="{ name: 'ChangeProductView', params: { id: productId } }"
              class="btn active-btn"
              >Изменить</router-link
            >
            <div v-if="owner" class="btn active-btn" @click="handleDelete">
              Удалить
            </div>
          </div>
        </div>
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
          {{ product.description }}
        </div>
        <div class="product__btns">
          <button class="btn product__btn product__btn--1">Заказать</button>
          <button class="btn product__btn product__btn--2">
            <span>
              <ion-icon class="icon" name="star-outline"></ion-icon>
              <div>Добавить в список желаемых</div>
            </span>
          </button>
        </div>
        <Availability
          :product="product.delivery"
          availableText="Доставка доступна"
          unavailableText="Доставка недоступна"
        />
        <Availability
          :product="product.eco"
          availableText="ЭКО продукт"
          unavailableText="Продукт с добавками"
        />
      </div>
    </div>
    <div v-else>Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import FiveStars from "@/components/shared/Five-stars.vue";
import Availability from "@/components/shared/Availability.vue";

import { computed } from "vue";

import useDocument from "@/composables/useDocument";
import getUser from "@/composables/getUser";

import router from "@/router";
export default {
  name: "SingleProduct",
  components: { FiveStars, Availability },
  props: ["error", "product"],

  setup(props) {
    const productId = router.currentRoute.value.params.id;

    const { deleteDoc, error } = useDocument("products", productId);
    const { user } = getUser();

    const handleDelete = async () => {
      await deleteDoc();
      if (!error.value) {
        router.push("/market");
      }
    };

    const owner = computed(() => {
      return (
        props.product && user.value && user.value.uid == props.product.userUid
      );
    });

    return { productId, handleDelete, owner };
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
  margin: 0 auto;
  line-height: 1;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;
    height: 100%;
    max-width: 120rem;
    margin: 0 auto;
    @media (max-width: 47em) {
      grid-template-columns: 1fr;
      gap: 2.4rem;
    }
    .image {
      position: relative;
      min-height: 50rem;
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

  &__active-btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    .active-btn {
      font-family: $SSP;
      padding: 4px 8px;
      font-size: 1.28rem;
      font-weight: 600;
      line-height: 1.2;
      color: $main-dark-1;
      border-radius: 2px;
      background-color: rgba($main-dark-1, 0.1);

      &:hover {
        background-color: rgba($main-dark-1, 0.25);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  &__btn {
    text-decoration: none;
  }
  &__seller {
    font-size: 1.24rem;
    line-height: 1.4;
    font-weight: 600;
    font-family: $SSP;
    margin-left: 1px;
    margin-top: 1rem;

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
    @media (max-width: 47em) {
      font-size: 3.1rem;
    }
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
          & > .icon {
            color: greenyellow;
          }
        }
      }

      span {
        display: flex;
        gap: 1rem;
        justify-content: center;
      }
    }
  }
}
</style>