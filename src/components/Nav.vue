<template>
  <nav class="nav" ref="navRef">
    <router-link class="logo" to="/">Logo</router-link>
    <ion-icon
      @click="toggleNav"
      class="icon icon-show"
      name="reorder-three-outline"
    ></ion-icon>
    <ion-icon
      @click="toggleNav"
      class="icon icon-hide"
      name="close-outline"
    ></ion-icon>
    <div class="container">
      <ul>
        <router-link class="li" :to="{ name: 'MarketView' }">Рынок</router-link>
        <router-link v-if="user" class="li" :to="{ name: 'MyProductsView' }"
          >Мои товары</router-link
        >
        <router-link v-if="user" class="li" :to="{ name: 'CreateProductView' }"
          >Создать свой товар</router-link
        >
      </ul>

      <div class="action">
        <Btn1
          v-if="user && !isPending"
          class="login"
          title="Выйти"
          @click="logoutUser"
        />
        <Btn1
          v-if="user && isPending"
          class="login"
          title="Выйти"
          @click="logoutUser"
          disabled
        />

        <router-link v-if="!user" :to="{ name: 'Signin' }">
          <Btn1 class="login" title="Войти" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import Btn1 from "@/components/shared/Btn-1";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
export default {
  name: "Nav",
  components: { Btn1 },

  setup() {
    const navRef = ref(null);

    const { user } = getUser();
    const { error, logout, isPending } = useLogout();
    const router = useRouter();
    const logoutUser = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "Signin" });
      }
    };

    const toggleNav = () => {
      navRef.value.classList.toggle("active");
    };

    return { user, logoutUser, navRef, toggleNav, isPending };
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

.nav {
  font-family: $SSP;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  color: $text;
  background-color: $main-light-1;
  padding: 1.4rem 6.4rem;

  @media (max-width: 56rem) {
    padding: 1.4rem 4.8rem;
    gap: 1rem;
  }
  @media (max-width: 47em) {
    font-size: 1.6rem;
    padding: 1rem 3.2rem;
  }
  @media (max-width: 31em) {
    padding: 1rem 1.6rem;
    position: relative;
  }

  .icon {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0;
    margin: 0;
    z-index: 2000;
    display: none;
    @media (max-width: 31em) {
      &.icon-hide {
        display: none;
      }
      &.icon-show {
        display: block;
      }
    }
  }

  // nav.active
  &.active {
    .container {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
      user-select: auto;
    }
    .icon-hide {
      display: block;
    }
    .icon-show {
      display: none;
    }
  }

  .logo {
    text-decoration: none;
  }

  .container {
    display: flex;
    gap: 6.4rem;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    @media (max-width: 56rem) {
      gap: 4.8rem;
    }
    @media (max-width: 47em) {
      gap: 3.2rem;
    }
    @media (max-width: 31em) {
      gap: 1.6rem;
      position: absolute;
      background-color: rgba($white, 0.5);
      backdrop-filter: blur(6px);
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translateX(100%);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;
      /*       visibility: hidden;
      opacity: none;
      user-select: none; */
    }

    ul {
      display: flex;
      gap: 2.4rem;
      align-items: center;
      @media (max-width: 31em) {
        flex-direction: column;
      }
      .li {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        color: rgba($text, 0.9);

        &:hover {
          border-bottom: 1px solid $main-dark-1;
          transform: translateY(-2px);
        }
        &:active {
          border-bottom: none;
          transform: translate(0);
        }
      }
      @media (max-width: 56em) {
        gap: 2rem;
      }
      @media (max-width: 56em) {
        gap: 1.8rem;
      }
    }

    .action {
      display: flex;
      gap: 2.4rem;
    }
  }
}
.login {
  padding: 1.4rem 3.7rem 1.4rem 2.25rem;
  @media (max-width: 56em) {
    font-size: 1.6rem;
  }
}
</style>
