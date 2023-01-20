<template>
  <div class="signup">
    <h2 class="form__heading">Войти</h2>
    <form class="form">
      <div class="group">
        <input type="email" class="input" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Email</label>
      </div>

      <div class="group">
        <input type="password" class="input" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Пароль</label>
        <div class="show-password">
          <img src="../../assets/icons/eye.svg" alt="" />
        </div>
        <!--         <div class="hide-password">
          <img src="../../assets/icons/eye-off.svg" alt="" />
        </div> -->
      </div>
      <button class="btn form__btn">Войти</button>
    </form>
    <h4>
      Нету аккаунта?
      <router-link class="link" :to="{ name: 'Signup' }">
        Регистрация
      </router-link>
    </h4>
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

.signup {
  max-width: 45rem;
  margin: 0 auto;
  margin-top: 3.2rem;
  .form {
    padding: 2.8rem 4rem;
    border: 1px solid rgba($main-light-1, 0.4);
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.06),
      0px 10px 15px rgba(0, 0, 0, 0.03);
    border-radius: 20px;

    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-top: 2.4rem;

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
    .group {
      position: relative;

      .input {
        font-family: $roboto;
        padding: 1.2rem 1rem;
        font-size: 16px;
        display: block;
        width: 400px;
        border: none;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        border: 1px solid rgba($main-light-1, 0.6);
        background: transparent;
        width: 100%;
        // border-radius: 0.5rem;

        &:focus {
          outline: none;
        }

        &:focus ~ label,
        &:valid ~ label {
          top: -2rem;
          font-size: 1.28rem;
          color: $main-dark-1;
        }

        &:focus ~ .bar:before,
        &:focus ~ .bar:after {
          width: 50%;
        }
      }

      label {
        color: rgba($main-dark-1, 0.5);
        // font-size: 18px;
        font-weight: 500;
        position: absolute;
        pointer-events: none;
        left: 1rem;
        top: 1rem;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
      }

      .highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
      }

      .bar {
        position: relative;
        display: block;
        width: 100%;

        &::before,
        &::after {
          content: "";
          height: 2px;
          width: 0;
          bottom: 1px;
          position: absolute;
          background: $main-light-2;
          border-radius: 1rem;
          transition: 0.2s ease all;
          -moz-transition: 0.2s ease all;
          -webkit-transition: 0.2s ease all;
        }

        &::before {
          left: 50%;
        }
        &::after {
          right: 50%;
        }
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

.show-password,
.hide-password {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  cursor: pointer;
}

.input[type="password"] {
  letter-spacing: 0.6rem;
}
</style>