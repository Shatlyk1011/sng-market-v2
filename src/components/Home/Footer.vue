<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="contacts">
        <div class="mail">
          <span>Email: </span> <br />
          <a href="mailto:shatlykabdullayev@mail.ru"
            >shatlykabdullayev@mail.ru</a
          >
        </div>
        <div class="phone">
          <span>Телефон:</span> <br />
          <a href="tel:+79965177225">+79965177225</a>
        </div>
      </div>
      <div class="footer__description">
        <ul class="social-links">
          <li class="social-link">
            <a target="_blank" href="https://instagram.com/shatlykabdullayew"
              ><ion-icon class="icon" name="logo-instagram"></ion-icon
            ></a>
          </li>
          <li class="social-link">
            <a target="_blank" href="https://vk.com/shatlyk99"
              ><ion-icon class="icon" name="logo-vk"></ion-icon
            ></a>
          </li>
          <li class="social-link">
            <a target="_blank" href="https://t.me/sh_1415926535"
              ><ion-icon class="icon" name="send"></ion-icon
            ></a>
          </li>
        </ul>
        <div class="footer__rights">&#169; 2022 Все права защищены.</div>
      </div>
    </footer>
  </div>
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

.footer-container {
  background-color: $main-light-1;
  .footer {
    margin: 0 15rem;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5rem 10rem;

    @media (max-width: 68em) {
      margin: 0 15rem;
      padding: 3rem 5rem;
    }
    @media (max-width: 56em) {
      grid-template-columns: 1fr;
      gap: 1.6rem;
      margin: 0 5rem;
    }
    @media (max-width: 47em) {
      margin: 0;
      padding: 3.2rem;
    }
    &__description {
      display: flex;
      justify-content: space-between;
      gap: 1.4rem;
      align-items: flex-end;

      display: flex;
      flex-direction: column;

      @media (max-width: 56em) {
        text-align: center;
        justify-self: center;
      }
    }

    &__icons {
      display: flex;
      list-style: none;
      font-size: 1.6rem;
      gap: 3.2rem;
    }

    &__icon {
      color: #fff;

      transition: all 0.2s;

      &:hover {
        transform: translateY(-2px) scale(1.1);
        color: #fba820;
      }
    }
    &__rights {
      font-size: 1.2rem;
      font-weight: 600;
      color: $main-dark-2;
      line-height: 1.4;
    }
  }

  .contacts {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    align-items: flex-start;
    @media (max-width: 56em) {
      text-align: center;
      align-items: center;
    }

    & span {
      font-weight: 600;
      letter-spacing: 0.8px;
    }

    & a:link,
    a:visited {
      text-decoration: none;
      color: $main-dark-2;
      border-bottom: 1px solid transparent;
      transition: all 0.2s;
      letter-spacing: 0.4px;

      &:hover {
        border-bottom: 1px solid $main-dark-2;
      }
    }
  }

  .mail,
  .phone {
    line-height: 1.5;
  }

  .no-margin {
    margin: 0;
  }

  .social-links {
    @media (max-width: 56em) {
      & {
        margin: 0 auto;
      }
    }
  }
  .social-links {
    display: flex;
    gap: 3.6rem;
    list-style: none;

    @media (max-width: 56em) {
      justify-content: center;
    }
  }

  .icon {
    height: 2rem;
    width: 2rem;
    color: $main-dark-1;

    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px) scale(1.1);
      color: $main-dark-2;
    }
    &:active {
      transform: translateY(0) scale(0.98);
    }
  }
}
</style>