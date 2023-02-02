<template>
  <div class="images">
    <div class="container">
      <figure class="img img--1">
        <div class="description">
          <div class="title">Исследуйте наш рынок!</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            deleniti in rerum beatae perspiciatis hic libero illo magnam nostrum
            totam.
          </p>
          <router-link to="/market" class="description__btn"
            >Посмотреть рынок</router-link
          >
        </div>
      </figure>

      <figure class="img img--2"></figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$main-light-1: #d9975c;
$main-light-2: #ab825f;
$main-dark-1: #455445;
$main-dark-2: #1e281e;
$text: #181f29;
$white: #fff;

$roboto: "Roboto Mono", monospace;
$SSP: "Source Sans Pro", sans-serif;

.images {
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .img {
      display: inline-block;
      min-height: 80rem;

      @media (max-width: 100em) {
        min-height: 100rem;
      }

      @media (max-width: 68em) {
        min-height: 70rem;
      }
      @media (max-width: 56em) {
        min-height: 60rem;
      }
      @media (max-width: 47em) {
        min-height: 55rem;
      }
      @media (max-width: 31em) {
        min-height: 40rem;
      }

      &--1 {
        position: relative;
        background: linear-gradient(
            197deg,
            rgba(63, 63, 63, 0.5) 0%,
            rgba(0, 0, 0, 0.7) 100%
          ),
          url("../../assets/image-1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }

      &--2 {
        position: relative;
        background: linear-gradient(
            197deg,
            rgba(63, 63, 63, 0.5) 0%,
            rgba(0, 0, 0, 0.7) 100%
          ),
          url("../../assets/image-2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .description {
      position: absolute;
      bottom: 6.4rem;
      left: 2.8rem;
      right: 2.8rem;

      @media (max-width: 47em) {
        bottom: 4.8rem;
        left: 2rem;
        right: 2rem;
      }
      @media (max-width: 31em) {
        left: 1rem;
        right: 1rem;
        bottom: 2rem;
      }

      .title {
        font-family: $SSP;
        font-size: 6.1rem;
        font-weight: 500;
        color: $white;
        letter-spacing: 1px;
        line-height: 1;

        @media (max-width: 68em) {
          font-size: 3.9rem;
          font-weight: 600;
        }
        @media (max-width: 47em) {
          font-size: 3.1rem;
          font-weight: 500;
        }
        @media (max-width: 31em) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 3.1rem;
        font-weight: 500;
        margin-top: 4rem;
        line-height: 1.5;
        color: $white;
        @media (max-width: 68em) {
          margin-top: 2.4rem;
          font-size: 2.5rem;
          font-weight: 400;
        }
        @media (max-width: 47em) {
          font-size: 2rem;
          line-height: 1.4;
          margin-top: 2.4rem;
        }
        @media (max-width: 31em) {
          font-size: 1.6rem;
        }
      }

      &__btn {
        display: inline-block;
        margin-top: 2.8rem;
        font-size: 2rem;
        color: $white;
        background-color: $main-dark-1;
        padding: 0.8rem 1.6rem;
        border: 1px solid $main-dark-1;
        text-decoration: none;
        border-radius: 2px;

        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
          background: rgba($main-dark-1, 0.5);
          box-shadow: 0 8px 32px 0 rgba($main-dark-1, 0.1);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(5.5px);
          border: 1px solid rgba($main-dark-1, 0.18);
        }
        &:active {
          transform: translateY(4px) scale(0.97);
        }

        &:focus {
          outline: none;
        }

        @media (max-width: 68em) {
          font-size: 1.6rem;
        }
        @media (max-width: 47em) {
          font-size: 1.28rem;
          margin-top: 1.6rem;
        }
        @media (max-width: 31em) {
          padding: 0.4rem 1rem;
        }
      }
    }
  }
}
</style>