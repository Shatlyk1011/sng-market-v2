<template>
  <div class="create-product">
    <form class="form" @submit.prevent="createNewProduct">
      <label class="label"
        ><span> Название товара </span>
        <input
          type="text"
          v-model="title"
          placeholder="Название товара"
          required
        />
      </label>
      <div class="label">
        <span> Цена за килограмм: </span>
        <input
          type="number"
          v-model="price"
          placeholder="Напишите цену в рублях..."
          required
        />
      </div>
      <div class="label">
        <span> Категория товара </span>
        <select v-model="category">
          <option value="Фрукты">Фрукты</option>
          <option value="Сухофрукты">Сухофркуты</option>
          <option value="Овощи">Овощи</option>
          <option value="Орехи">Орехи</option>
        </select>
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
          v-model="description"
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
/* 
  BORDER-RADIUS
  0.8rem, .
  1rem,
  1.6rem,
 */

.create-product {
  padding: 6.4rem 4.8rem;
  .form {
    max-width: 45rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    line-height: 1.4;
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