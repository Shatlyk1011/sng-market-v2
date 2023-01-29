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
          <option value="Фрукты">Фрукты</option>
          <option value="Сухофрукты">Сухофркуты</option>
          <option value="Овощи">Овощи</option>
          <option value="Орехи">Орехи</option>
        </select>
      </div>
      <label class="label">
        <span>Выберите новое фото (png/jpeg)</span>
        <input @input="handleImage" type="file" />
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
    console.log(typeof productId);
    const title = ref("");
    const price = ref("");
    const category = ref("");
    const description = ref("");
    const image = ref(null);
    const imageTypeError = ref(null);
    const isPending = ref(null);

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
    };
    const updateProduct = async () => {
      isPending.value = true;
      //удалить старое и загрузить новое изображение
      if (image.value) {
        await deleteImage(document.value.filePath);

        await uploadImage(image.value);
      }

      //обновить данные
      await updateDoc({
        title: title.value,
        price: price.value,
        category: category.value,
        description: description.value,
        filePath: filePath.value,
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

    return {
      title,
      price,
      category,
      description,
      document,
      handleImage,
      error,
      isPending,
      imageTypeError,
      updateError,
      storageError,
      updateProduct,
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

      select {
      }
      textarea {
        width: 100%;
        height: 12.8rem;
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