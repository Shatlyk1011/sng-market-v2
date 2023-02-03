<template>
  <div class="signup">
    <h2 class="form__heading">Войти</h2>
    <form class="form" @submit.prevent="handleLogin">
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

      <div class="error" v-if="error">{{ error }}</div>

      <button v-if="!isPending" class="btn form__btn">Войти</button>
      <Disabled-button
        smallerBorder="smallerBorder"
        v-if="isPending"
        title="Заходим"
      />
    </form>
    <h4>
      Нету аккаунта?
      <router-link class="link" :to="{ name: 'Signup' }">
        Регистрация
      </router-link>
      <div
        class="test-log"
        style="margin-top: 1rem; text-align: center; font-weight: 500"
      >
        <div style="font-weight: 600">Для тестирования</div>
        login: sergey@mail.ru <br />
        password: test123
      </div>
    </h4>
  </div>
</template>

<script>
import DisabledButton from "@/components/shared/DisabledButton.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import useSignin from "@/composables/useSignin";
export default {
  name: "Signin",
  components: { DisabledButton },

  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    //показать и скрыть пароль
    const passwordRefBoolean = ref(false);
    const passwordRef = ref(null);

    const { error, login, isPending } = useSignin();

    const togglePasswordVisibility = () => {
      passwordRefBoolean.value = !passwordRefBoolean.value;
      if (passwordRefBoolean.value === true) {
        passwordRef.value.setAttribute("type", "text");
      } else {
        passwordRef.value.setAttribute("type", "password");
      }
    };

    const handleLogin = async () => {
      await login(email.value, password.value);
      console.log(error.value);
      if (!error.value) {
        router.push("/");
      }
    };

    return {
      email,
      password,
      handleLogin,
      error,
      isPending,
      togglePasswordVisibility,
      passwordRef,
      passwordRefBoolean,
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
    width: 100%;

    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-top: 2.4rem;
    @media (max-width: 47em) {
      padding: 3.2rem 2.4rem;
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
      &:active {
        transform: translateY(4px) scale(0.96);
      }
    }
  }
  h4 {
    margin-top: 2.4rem;
    text-align: center;

    & .link {
      font-family: $SSP;
      font-size: 1.6rem;
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

/* .show-password,
.hide-password {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  cursor: pointer;
} */

.input[type="password"] {
  letter-spacing: 0.6rem;
}
</style>