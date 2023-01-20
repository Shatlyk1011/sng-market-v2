<template>
  <footer class="footer">
    <div class="container">
      <ul>
        <li>Рынок</li>
        <li>Мои Товары</li>
        <li>О нас</li>
      </ul>

      <div class="apps">
        <div class="app">
          <div class="app__icon">
            <img src="../../assets/icons/logo-apple.svg" alt="" />
          </div>
          <div class="app__description">
            <span>Скачать в</span>
            <div>App Store</div>
          </div>
        </div>

        <div class="app">
          <div class="app__icon">
            <img src="../../assets/icons/logo-google.svg" alt="" />
          </div>
          <div class="app__description">
            <span>Скачать в</span>
            <div>Google Play</div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">&copy;Copyright 2022. Все права защищены.</div>
  </footer>
</template>

<script>
export default {};
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
.footer {
  padding: 4rem 16rem;
  background-color: $main-light-1;
  .container {
    display: flex;
    justify-content: space-around;

    border-bottom: 1px solid $main-dark-2;
    padding-bottom: 3rem;
    ul {
      display: flex;
      // flex-direction: column;
      gap: 1.6rem;
    }
    li {
      list-style: none;
    }
  }
  .apps {
    display: flex;
    gap: 2.4rem;
    align-self: center;
    .app {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: $main-dark-2;
      color: $white;
      padding: 0.4rem 1rem;
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        transform: translateY(-1px) scale(1.04);
      }

      &:active {
        transform: translateY(2px) scale(0.98);
      }
      &__icon {
        display: flex;
        align-self: center;
        img {
          display: inline-block;
        }
      }
      &__description {
        display: flex;
        flex-direction: column;
        line-height: 1;
        font-family: $SSP;
        text-align: center;

        span {
          color: $white;
          font-size: 1.024rem;
          margin: 0;
          text-align: left;
        }
        div {
          font-weight: 600;
          color: $white;
        }
      }
    }
  }
}

.copyright {
  text-align: center;
  margin-top: 2.4rem;
}
</style>