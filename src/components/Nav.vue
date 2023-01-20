<template>
  <nav class="nav">
    <a class="logo" href="/">Logo</a>
    <div class="container">
      <ul>
        <router-link class="li" :to="{ name: 'Market' }">Рынок</router-link>
        <router-link class="li" :to="{ name: 'Home' }">Мои товары</router-link>
        <router-link class="li" :to="{ name: 'Home' }">О нас</router-link>
      </ul>
      <div class="action">
        <router-link :to="{ name: 'Signup' }">
          <Btn1 class="login" title="Войти" />
        </router-link>
        <!-- <Btn class="logout" title="Войти" /> -->
      </div>
    </div>
  </nav>
</template>

<script>
import Btn1 from "@/components/shared/Btn1";
export default {
  name: "Nav",
  components: { Btn1 },
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

  .logo {
    text-decoration: none;
  }

  .container {
    display: flex;
    gap: 6.4rem;
    align-items: center;
    ul {
      display: flex;
      gap: 2.4rem;
      align-items: center;
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
    }

    .action {
      display: flex;
      gap: 2.4rem;

      .login {
        padding: 1.4rem 3.7rem 1.4rem 2.25rem;
      }
    }
  }
}
</style>
