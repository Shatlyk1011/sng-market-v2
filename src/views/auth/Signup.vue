<template>
  <div class="signup">
    <h2 class="form__heading">Регистрация</h2>
    <form @submit.prevent="handleRegister" class="form">
      <div class="input-container">
        <input
          class="input"
          v-model="userName"
          id="username"
          placeholder="Ваше имя"
          type="text"
          required
        />
        <label class="label" for="username">Ваше имя</label>
      </div>

      <div class="input-container">
        <input
          class="input"
          v-model="email"
          id="email"
          placeholder="Email"
          type="email"
          required
        />
        <label class="label" for="email">Email</label>
      </div>

      <div class="input-container relative">
        <input
          class="input"
          v-model="password"
          id="password"
          placeholder="Пароль"
          type="password"
          ref="passwordRef"
          required
        />
        <label class="label" for="email">Пароль</label>
        <img
          v-if="passwordRefBoolean"
          @click="togglePasswordVisibility"
          class="hide"
          src="../../assets/icons/eye.svg"
          alt=""
        />
        <img
          v-if="!passwordRefBoolean"
          @click="togglePasswordVisibility"
          class="hide"
          src="../../assets/icons/eye-off.svg"
          alt=""
        />
      </div>

      <div class="input relative" ref="photoRef">
        <label class="label" for="photo">Выберите фото для аватарки</label>
        <input
          @input="handleInputPhoto"
          id="photo"
          placeholder="Photo"
          type="file"
          required
        />
        <img
          @mouseenter="showQuote"
          @mouseleave="hideQuote"
          src="../../assets/icons/question.svg"
          alt="question"
        />
        <p>Ваша аватарка будет использоваться в коментариях</p>
        <div class="error" v-if="photoTypeError">{{ photoTypeError }}</div>
      </div>
      <div class="error" v-if="error">{{ error }}</div>

      <div class="check">
        <input type="checkbox" id="checkbox" required />
        <label for="checkbox">Я принимаю все </label><span>условия</span>
      </div>
      <button v-if="!isPending" class="btn form__btn">
        Зарегистрироватсья
      </button>
      <disabled-button
        v-if="isPending"
        smallerBorder="smallerBorder"
        title="Регистрация"
      />
    </form>
    <h4>
      Есть аккаунт?
      <router-link class="link" :to="{ name: 'Signin' }"> Войти </router-link>
    </h4>
  </div>
</template>

<script>
import DisabledButton from "@/components/shared/DisabledButton.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignup from "@/composables/useSignup";
export default {
  name: "Signup",
  components: { DisabledButton },

  setup() {
    const router = useRouter();
    const userName = ref("");
    const email = ref("");
    const password = ref("");
    const photo = ref(null);
    const photoTypeError = ref(null);
    const photoRef = ref(null);

    //показать и скрыть пароль
    const passwordRefBoolean = ref(false);
    const passwordRef = ref(null);
    const togglePasswordVisibility = () => {
      passwordRefBoolean.value = !passwordRefBoolean.value;
      if (passwordRefBoolean.value === true) {
        passwordRef.value.setAttribute("type", "text");
      } else {
        passwordRef.value.setAttribute("type", "password");
      }
    };

    //composables
    const { error, signup, isPending } = useSignup();

    //Зарегистрировать пользователя
    const allowedPhotoType = ["image/png", "image/jpeg"];

    const handleRegister = async () => {
      if (photo.value && allowedPhotoType.includes(photo.value.type)) {
        await signup(email.value, password.value, userName.value, photo.value);
        console.log("userCreated");
        if (!error.value) {
          router.push({ name: "HomeView" });
        }
      } else {
        photoTypeError.value = "Только png/jpen форматы";
        setTimeout(() => {
          photoTypeError.value = null;
        }, 3000);
      }
    };

    const handleInputPhoto = (e) => {
      photo.value = e.target.files[0];
      console.log("photoval", photo.value);
    };

    //показать/скрыть question mark
    const showQuote = () => {
      setTimeout(() => {
        photoRef.value.classList.add("active");
      }, 300);
    };
    const hideQuote = () => {
      setTimeout(() => {
        photoRef.value.classList.remove("active");
      }, 300);
    };

    return {
      userName,
      email,
      password,
      handleRegister,
      isPending,
      photoRef,
      error,
      photoTypeError,
      passwordRefBoolean,
      passwordRef,
      togglePasswordVisibility,
      handleInputPhoto,
      showQuote,
      hideQuote,
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

.signup {
  max-width: 55rem;
  margin: 0 auto;
  padding: 6.4rem 2.4rem;
  .form {
    padding: 4.8rem;
    border: 1px solid rgba($main-light-1, 0.4);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.06),
      0px 10px 15px rgba(0, 0, 0, 0.03);
    border-radius: 20px;

    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 2.4rem;

    @media (max-width: 47em) {
      padding: 3.2rem 2.4rem;
      margin-top: 1.6rem;
    }
    &__heading {
      font-family: $SSP;
      text-align: center;
      font-size: 3.125rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    &__btn {
      width: 100%;
      padding: 1.2rem;
      font-size: 1.6rem;
      background-color: $main-light-1;
      transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
      color: $white;

      &:hover {
        background-color: $main-light-2;
      }
    }

    .input-container.relative {
      position: relative;
    }
    .input-container {
      display: flex;
      flex-direction: column;

      .input {
        font-size: 1.6rem;
        color: inherit;
        padding: 1.5rem 2rem;
        // background-color: #fff;
        border: none;
        outline: none;
        border-bottom: 3px solid transparent;
        transition: all 0.3s;

        &:focus {
          box-shadow: 0 1rem 2rem rgba($text, 0.1);
        }

        &:focus:invalid {
          border-bottom: 3px solid orangered;
        }

        &:valid {
          border-bottom: 3px solid green;
        }
        &:placeholder-shown + .label {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-2rem);
        }
        &::placeholder {
          font-family: $SSP;
          letter-spacing: 1px;
        }
      }

      .hide {
        position: absolute;
        height: 18px;
        width: 18px;
        top: 30%;
        transform: translateY(-30%);
        right: 1rem;
      }

      .label {
        font-size: 1.28rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: 0.7rem;
        display: block;
        transition: all 0.3s;
        font-family: $SSP;
        letter-spacing: 1px;
        // transform: translateY(-8rem);
      }
    }

    .input[type="password"] {
      letter-spacing: 6px;
    }
  }
  h4 {
    margin-top: 2.4rem;
    text-align: center;

    & .link {
      color: $main-light-2;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);

      &:hover {
        color: $main-light-1;
        border-bottom: 1px solid $main-light-1;
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.06),
          0px 10px 15px rgba(0, 0, 0, 0.03);
      }
    }
  }
}

.show-password,
.hide-password {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  cursor: pointer;
}

.check {
  display: flex;
  gap: 1rem;
  align-items: center;
  line-height: 1;
  user-select: none;

  span {
    color: $main-light-1;
    border-bottom: 1px solid $main-light-1;
    user-select: none;

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;

    &:hover {
      color: $main-light-2;
      border-bottom: 1px solid $main-light-2;
    }
    &:active {
      transform: translateY(2px) scale(0.95);
    }
  }

  #checkbox {
    &:checked {
      accent-color: $main-light-2;
      color: $white;
    }
  }
}

.relative {
  position: relative;

  label {
    font-weight: 500;
    margin-bottom: 1rem;
    display: inline-block;
    position: relative;
  }

  img {
    position: absolute;
    top: -0.5rem;
    right: 1rem;
    z-index: 100;
    cursor: help;
    z-index: 100;
  }

  p {
    position: absolute;
    font-size: 1rem;
    right: -5.5rem;
    top: -6rem;
    width: 15rem;
    text-align: center;
    line-height: 1.2;
    background-color: $main-light-2;
    border-radius: 1rem;
    opacity: 0;
    visibility: 0;
    user-select: none;
    transition: opacity 0.3s;
    padding: 6px 1rem;
    z-index: 10;
    color: $white;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -4px;
      border-width: 4px;
      border-radius: 1px;
      border-style: solid;
      border-color: transparent;
      border-top-color: $main-light-2;
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
</style>