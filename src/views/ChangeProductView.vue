<template>
  <div class="change-product">
    <form class="form" @submit.prevent="updateProduct">
      <h2>
        Здесь вы можете изменить описание, цену, изображение ваших товаров
      </h2>
      <label class="label"
        ><span> </span>
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
          <optgroup label="Выберите вид товара">
            <option value="Фрукты">Фрукты</option>
            <option value="Сухофрукты">Сухофркуты</option>
            <option value="Овощи">Овощи</option>
            <option value="Орехи">Орехи</option>
          </optgroup>
        </select>
      </div>

      <div class="checkboxex">
        <div class="checkboxex__wrapper">
          <span>Доступна ли доставка?</span>
          <div class="cntr">
            <input
              type="checkbox"
              v-model="delivery"
              id="cbx-1"
              class="hidden-xs-up"
            />
            <label for="cbx-1" class="cbx"></label>
          </div>
        </div>
        <div class="checkboxex__wrapper relative" ref="checkboxRef">
          <span>Является ли ваш продукт ЭКО</span>
          <ion-icon name="help-outline" class="icon"></ion-icon>
          <div
            @mouseenter="showQuote"
            @mouseleave="hideQuote"
            class="invis-box"
          ></div>

          <p>Экологически чистый продукт без химикатов и добавок</p>
          <div class="cntr">
            <input
              type="checkbox"
              v-model="eco"
              id="cbx-2"
              class="hidden-xs-up"
            />
            <label for="cbx-2" class="cbx"></label>
          </div>
        </div>
      </div>

      <label class="label label-file">
        <input @input="handleImage" class="input" type="file" />
        <div class="new-input">
          <div class="file-btn">
            <span>Выберите фото</span>
            <div class="box"></div>
          </div>
          <div class="image-name" v-if="image">{{ image.name }}</div>
          <div class="image-name" v-else>Название изображения</div>
        </div>
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
      <div class="error" v-if="error">{{ error }}</div>
      <div class="error" v-if="updateError">{{ updateError }}</div>
      <div class="error" v-if="storageError">{{ storageError }}</div>

      <div class="error" v-if="imageTypeError">{{ imageTypeError }}</div>
      <button class="btn form__btn" v-if="!isPending">Изменить описания</button>
      <DisabledButton v-if="isPending" title="Вносим изменения" />
    </form>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import useDocument from "@/composables/useDocument";
import useStorage from "@/composables/useStorage";

import DisabledButton from "@/components/shared/DisabledButton.vue";

import router from "@/router";
import { ref, watch } from "@vue/runtime-core";
export default {
  name: "ChangeProductView",

  components: { DisabledButton },

  setup() {
    const productId = router.currentRoute.value.params.id;

    const title = ref("");
    const price = ref("");
    const category = ref("");
    const delivery = ref(null);
    const eco = ref(null);
    const description = ref("");
    const image = ref(null);
    const imageTypeError = ref(null);
    const isPending = ref(null);
    const checkboxRef = ref(null);

    //composables
    const { document, error } = getDocument("products", productId);
    const { updateDoc, error: updateError } = useDocument(
      "products",
      productId
    );

    const {
      uploadImage,
      deleteImage,
      url: imageUrl,
      error: storageError,
      filePath,
    } = useStorage();

    const allowedImageType = ["image/png", "image/jpeg"];
    const handleImage = (e) => {
      let selected = e.target.files[0];
      if (selected && allowedImageType.includes(selected.type)) {
        image.value = selected;
        console.log("new image1", image.value);
      } else {
        imageTypeError.value = "Только png/jpen форматы";
        setTimeout(() => {
          imageTypeError.value = null;
        }, 3000);
      }
    };

    //подставить имеющиеся значения
    watch(document, () => {
      setValues();
    });
    const setValues = () => {
      title.value = document.value.title;
      price.value = document.value.price;
      category.value = document.value.category;
      description.value = document.value.description;
      delivery.value = document.value.delivery;
      eco.value = document.value.eco;
    };
    const updateProduct = async () => {
      isPending.value = true;
      //удалить старое и загрузить новое изображение
      if (image.value) {
        await deleteImage(document.value.filePath);
        console.log("image VALUE inside handle", image.value);

        await uploadImage(image.value);
      }

      //обновить данные
      await updateDoc({
        title: title.value,
        price: price.value,
        category: category.value,
        description: description.value,
        filePath: filePath.value,
        delivery: delivery.value,
        eco: eco.value,
      });
      if (imageUrl.value) {
        await updateDoc({
          imageUrl: imageUrl.value,
        });
      }
      isPending.value = null;
      if (!error.value && !updateError.value) {
        router.push({ name: "MarketView" });
      }
    };

    //показать/скрыть question mark
    const showQuote = () => {
      setTimeout(() => {
        checkboxRef.value.classList.add("active");
      }, 300);
    };
    const hideQuote = () => {
      setTimeout(() => {
        checkboxRef.value.classList.remove("active");
      }, 300);
    };

    return {
      title,
      price,
      category,
      description,
      delivery,
      eco,
      document,
      handleImage,
      error,
      isPending,
      imageTypeError,
      updateError,
      checkboxRef,
      storageError,
      updateProduct,
      image,
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

.change-product {
  padding: 6.4rem 4.8rem;
  @media (max-width: 31em) {
    padding: 3.2rem 1.6rem;
  }
  .form {
    max-width: 45rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    line-height: 1.4;
    @media (max-width: 31em) {
      gap: 2rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 1.4;
      font-family: $SSP;
      font-weight: 600;
      color: $main-dark-1;
      text-align: center;
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
        border: 0.1rem solid rgba($main-dark-2, 0.2);
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
        @media (max-width: 31em) {
          padding: 0.4rem 1rem;

          & optgroup {
            font-size: 1.28rem;
          }
        }
      }

      select {
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
      border: 0.1rem solid rgba($main-dark-2, 0.2);
      padding: 0.4rem 1rem;
      border-radius: 0.8rem;

      @media (max-width: 31em) {
        flex-direction: column;
        gap: 0.8rem;
        padding: 1rem;
      }

      &__wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        align-items: center;

        span {
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.35;
        }
        //checkbox
        .cbx {
          position: relative;
          top: 0.1rem;
          width: 1.8rem;
          height: 1.8rem;
          border: 0.1rem solid #c8ccd4;
          border-radius: 0.4rem;
          vertical-align: middle;
          transition: background 0.1s ease;
          cursor: pointer;
          display: block;
          background-color: rgba($main-dark-2, 0.15);
        }

        .cbx:after {
          content: "";
          position: absolute;
          top: 0.2rem;
          left: 0.6rem;
          width: 0.3rem;
          height: 0.8rem;
          opacity: 0;
          transform: rotate(45deg) scale(0);
          border-right: 0.2rem solid #fff;
          border-bottom: 0.2rem solid #fff;
          transition: all 0.3s ease;
          transition-delay: 0.15s;
        }

        .lbl {
          margin-left: 0.5rem;
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
      .relative {
        position: relative;

        .icon {
          position: absolute;
          bottom: 0;
          right: 10rem;
          z-index: 100;
          color: $main-dark-1;

          @media (max-width: 31em) {
            right: 0;
          }
        }

        .invis-box {
          position: absolute;
          bottom: 0;
          right: 10rem;
          width: 1.6rem;
          height: 1.6rem;
          z-index: 1000;
          cursor: help;
          opacity: 0;
          @media (max-width: 31em) {
            right: 0;
          }
        }

        p {
          position: absolute;
          font-size: 1rem;
          right: -13%;
          bottom: -5.7rem;
          width: 15rem;
          text-align: center;
          line-height: 1.2;
          background-color: $main-dark-1;
          border-radius: 1rem;
          opacity: 0;
          visibility: 0;
          user-select: none;
          transition: opacity 0.3s;
          padding: 0.6rem 1rem;
          z-index: 1000;
          color: $white;
          @media (max-width: 31em) {
            font-size: 7px;
            right: -4%;
            padding: 4px;
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 10%;
            margin-left: -0.4rem;
            border-width: 0.6rem;
            border-radius: 0.1rem;
            border-style: solid;
            border-color: transparent;
            border-top-color: $main-dark-1;
            transform: rotate(180deg);
            @media (max-width: 31em) {
              left: 82%;
            }
          }
        }

        &.active {
          p {
            visibility: visible;
            opacity: 1;
            user-select: auto;
          }
        }
      }
    }

    .label-file {
      position: relative;
      .input {
        transform: scale(0);
      }

      .new-input {
        display: inline-flex;
        gap: 1rem;
        justify-self: start;
        align-items: center;
        flex-basis: 20%;
        cursor: pointer;
        position: absolute;
        width: 100%;
        .file-btn {
          position: relative;

          .box {
            width: 12rem;
            height: 4rem;
            border-radius: 0.4rem;
            background-color: $main-light-1;
            z-index: 400;
          }
          .box:hover,
          span:hover ~ .box {
            background-color: $main-light-2;
            box-shadow: 0 1rem 2rem rgba(#000, 0.07);
          }
          .box:active,
          span:active ~ .box {
            box-shadow: 0 1rem 2rem rgba(#000, 0.14);
          }

          span {
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 75%;
            transform: translate(-50%, -50%);
            z-index: 200;
            user-select: none;
          }
        }

        .image-name {
          font-size: 1.28rem;
          font-weight: 500;
          color: $main-dark-2;
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

      &:hover:not(:disabled) {
        background-color: $main-dark-2;
        box-shadow: 0 1rem 2rem rgba($main-dark-2, 0.1);
      }
      &:active:not(:disabled) {
        transform: translateY(4px) scale(0.98);
      }
    }
  }
}
</style>