<template>
  <div class="hero">
    <div class="container">
      <div class="img-container"></div>
      <div class="content">
        <div class="title">
          Добро пожаловать на лучший онлайн рынок в <span>СНГ</span>
        </div>
        <div class="subtitle">
          Лучший онлайн рынок для оптовых закупок в
          <span style="color: #fff; letter-spacing: 1px">СНГ</span> напрямую от
          поставщиков!
        </div>

        <Search
          class="search"
          placeholder="Яблоки, бананы, виноград,.."
          btnText="Поиск фруктов"
        />

        <div class="stats">
          <div class="stat stat--1">
            <div class="num">10000+</div>
            <div class="text">килограмм продаж фруктов и овощей в день!</div>
          </div>
          <div class="stat stat--2">
            <div class="num">150+</div>
            <div class="text">поставщиков из всех стран СНГ!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../shared/Search.vue";
export default {
  name: "Hero",
  components: { Search },
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

.hero {
  position: relative;
  .container {
    min-height: 70rem;
    padding: 0 6rem;
    max-width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    @media (max-width: 47em) {
      padding: 0 4rem;
    }
    @media (max-width: 31em) {
      padding: 0 1em;
    }

    .img-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      //bg
      filter: brightness(0.5);
      background: rgb(242, 242, 242);
      background: radial-gradient(
          circle,
          rgba(0, 0, 0, 0.4) 40%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        url("../../assets/bg-3.jpg");
      z-index: -1;
      background-position: bottom;
      background-size: cover;
      object-fit: cover;
    }
    .content {
      position: relative;
      justify-self: center;
      text-align: center;
      margin-top: 4.8rem;
      max-width: 55rem;
      @media (max-width: 31em) {
        margin-top: 3.2rem;
      }

      .title {
        font-family: $SSP;
        font-weight: 700;
        letter-spacing: -0.1rem;
        font-size: 4.8rem;
        line-height: 1.1;
        color: $white;
        animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s
          both;
        span {
          letter-spacing: 3px;
          color: $white;
          color: $main-light-1;
        }
        @media (max-width: 47rem) {
          font-size: 3.9rem;
        }
      }
      .subtitle {
        color: rgba($white, 0.8);
        font-weight: 400;
        font-family: $roboto;
        margin: 2.4rem 0 4.8rem 0;
        animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s
          both;
      }

      .search {
        animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) 1s
          both;
      }

      .stats {
        display: flex;
        justify-content: center;
        gap: 2.4rem;
        justify-content: space-around;
        margin-top: 6.4rem;

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 20rem;

          &--1 {
            animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
              1.3s both;
          }

          &--2 {
            animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
              1.4s both;
          }
          .num {
            color: $main-light-1;
            font-weight: 600;
            font-size: 3.125rem;
            line-height: 1.2;
            letter-spacing: -0.1rem;
          }
          .text {
            font-weight: 300;
            font-size: 1.4rem;
            color: $white;
          }
        }
      }
    }
  }
}

@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes scale-up-center {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>