<template>
  <div class="create-product">
    <form class="form" @submit.prevent="createNewProduct">
      <h2>
        Опишите свой товар, и выставите на продажу в <br />
        <span>СНГ маркет!</span>
      </h2>
      <label class="label"
        ><span> Название товара </span>
        <input
          type="text"
          v-model.trim="title"
          placeholder="Название товара"
          required
        />
      </label>
      <div class="label">
        <span> Цена за килограмм: </span>
        <input
          type="number"
          v-model.trim="price"
          placeholder="Напишите цену в рублях..."
          required
        />
      </div>
      <div class="label">
        <span> Категория товара </span>
        <select v-model.trim="category">
          <option value="Фрукты">Фрукты</option>
          <option value="Сухофрукты">Сухофркуты</option>
          <option value="Овощи">Овощи</option>
          <option value="Орехи">Орехи</option>
        </select>
      </div>
      <div class="checkboxex">
        <div class="checkboxex__wrapper">
          <span>Доступна ли доставка?</span>
          <div class="cntr">
            <input type="checkbox" id="cbx-1" class="hidden-xs-up" />
            <label for="cbx-1" class="cbx"></label>
          </div>
        </div>
        <div class="checkboxex__wrapper">
          <span>Является ли ваш продукт ЭКО?</span>
          <div class="cntr">
            <input type="checkbox" id="cbx-2" class="hidden-xs-up" />
            <label for="cbx-2" class="cbx"></label>
          </div>
        </div>
      </div>
      <label class="label">
        <span>Выберите фото (png/jpeg)</span>
        <input @input="handleImage" type="file" required />
        <div style="font-size: 1.28rem" class="error" v-if="imageTypeError">
          {{ imageTypeError }}
        </div>
      </label>
      <label class="label">
        <textarea
          v-model.trim="description"
          placeholder="Опишите ваш продукт (макс 300 символов)"
          maxlength="300"
          required
        ></textarea>
      </label>
      <button class="btn form__btn">Создать товар</button>
    </form>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import useCollection from "./../composables/useCollection";
import useStorage from "./../composables/useStorage";
import { timestamp } from "@/firebase/config";

import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CreateProductView",

  setup() {
    const { user } = getUser();
    const { addDoc } = useCollection("products");
    const { filePath, url, uploadImage, error } = useStorage();
    const router = useRouter();

    const title = ref("");
    const price = ref("");
    const category = ref("");
    const description = ref("");
    const image = ref(null);
    const imageTypeError = ref(null);
    const isPending = ref(null);

    const allowedImageType = ["image/png", "image/jpeg"];
    const handleImage = (e) => {
      let selected = e.target.files[0];
      if (selected && allowedImageType.includes(selected.type)) {
        image.value = selected;
      } else {
        imageTypeError.value = "Только png/jpen форматы";
        setTimeout(() => {
          imageTypeError.value = null;
        }, 3000);
      }
    };

    const createNewProduct = async () => {
      isPending.value = true;
      await uploadImage(image.value);
      await addDoc({
        title: title.value,
        price: price.value,
        category: category.value,
        description: description.value,
        imageUrl: url.value,
        filePath: filePath.value,
        userName: user.value.displayName,
        userUid: user.value.uid,
        createdAt: timestamp(),
      });
      isPending.value = false;
      if (!error.value) {
        router.push({ name: "MarketView" });
      }
    };

    return {
      title,
      price,
      category,
      description,
      handleImage,
      imageTypeError,
      createNewProduct,
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

.create-product {
  padding: 6.4rem 4.8rem;
  .form {
    max-width: 45rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    line-height: 1.4;

    h2 {
      font-size: 2rem;
      line-height: 1.4;
      font-family: $SSP;
      font-weight: 600;
      color: $main-dark-1;
      text-align: center;

      span {
        color: $main-light-1;
      }
    }
    .label {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      span {
        font-family: $SSP;
        line-height: 1.2;
        font-size: 1.28rem;
        font-weight: 600;
      }
      input,
      select,
      textarea {
        border: 1px solid rgba($main-dark-2, 0.2);
        border-radius: 1rem;
        outline: none;
        padding: 1rem 1.4rem;
        background-color: $white;
        box-shadow: 0 1rem 2rem rgba($main-dark-2, 0.03);

        &::placeholder {
          font-family: $roboto;
          font-size: 1.24rem;
          color: rgba($main-dark-2, 0.6);
        }
      }
      textarea {
        width: 100%;
        height: 12.8rem;
      }
    }
    .checkboxex {
      display: flex;
      gap: 2.4rem;
      flex-direction: row;
      position: relative;
      &__wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        align-items: center;

        span {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.35;
        }
        //checkbox
        .cbx {
          position: relative;
          top: 1px;
          width: 1.8rem;
          height: 1.8rem;
          border: 1px solid #c8ccd4;
          border-radius: 4px;
          vertical-align: middle;
          transition: background 0.1s ease;
          cursor: pointer;
          display: block;
          background-color: rgba($main-dark-2, 0.15);
        }

        .cbx:after {
          content: "";
          position: absolute;
          top: 2px;
          left: 6px;
          width: 3px;
          height: 8px;
          opacity: 0;
          transform: rotate(45deg) scale(0);
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transition: all 0.3s ease;
          transition-delay: 0.15s;
        }

        .lbl {
          margin-left: 5px;
          vertical-align: middle;
          cursor: pointer;
        }

        #cbx-1:checked ~ .cbx,
        #cbx-2:checked ~ .cbx {
          border-color: transparent;
          background: $main-light-2;
          animation: jelly 0.6s ease;
        }

        #cbx-1:checked ~ .cbx:after,
        #cbx-2:checked ~ .cbx:after {
          opacity: 1;
          transform: rotate(45deg) scale(1);
        }

        .cntr {
          position: relative;
        }

        @keyframes jelly {
          from {
            transform: scale(1, 1);
          }

          30% {
            transform: scale(1.25, 0.75);
          }

          40% {
            transform: scale(0.75, 1.25);
          }

          50% {
            transform: scale(1.15, 0.85);
          }

          65% {
            transform: scale(0.95, 1.05);
          }

          75% {
            transform: scale(1.05, 0.95);
          }

          to {
            transform: scale(1, 1);
          }
        }

        .hidden-xs-up {
          display: none !important;
        }
      }
    }
    &__btn {
      padding: 1rem 1.4rem;
      background-color: $main-dark-1;
      border-radius: 1rem;
      color: $white;
      box-shadow: 0 1rem 2rem rgba($main-dark-2, 0.05);
      font-size: 1.6rem;
      font-family: $SSP;
      line-height: 1;

      transition: all 0.2s ease;

      &:hover {
        background-color: $main-dark-2;
        box-shadow: 0 1rem 2rem rgba($main-dark-2, 0.1);
      }
      &:active {
        transform: translateY(4px) scale(0.98);
      }
    }
  }
}
</style>