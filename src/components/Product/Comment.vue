<template>
  <div class="comment">
    <div class="comment__likes">
      <svg
        @click="addLike"
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <title>Лайк</title>
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M256 112v288M400 256H112"
        />
      </svg>
      <span title="Количество лайков">{{ comment.likes }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Дизлайк</title>
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M400 256H112"
        />
      </svg>
    </div>
    <div style="width: 100%">
      <div class="comment__container">
        <div class="comment__title">
          <div class="comment__image">
            <img :src="comment.userImage" alt="" />
          </div>
          <div class="comment__author">{{ comment.author }}</div>
          <div class="comment__date">{{ comment.createdAt }}</div>
        </div>
        <div class="comment__actions">
          <div class="comment__delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
              width="14"
              height="14"
            >
              <title>Удалить</title>
              <path
                d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M80 112h352"
              />
              <path
                d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            <span class="delete">Удалить</span>
          </div>
          <div class="comment__edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Изменить</title>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"
              />
            </svg>
            <span>Изменить</span>
          </div>
        </div>
      </div>

      <div class="comment__text">
        {{ comment.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],
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

.comment {
  padding: 2.4rem;

  display: flex;
  gap: 2.4rem;
  &__likes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    background-color: #fefefe;
    border-radius: 0.6rem;

    svg {
      stroke: $main-dark-1;
      cursor: pointer;

      &:hover {
        color: $main-dark-2;
      }
    }

    span {
      color: $main-light-1;
      font-weight: 600;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__title {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }
  &__image {
    width: 4.8rem;
    height: 4.8rem;
    position: relative;
    overflow: hidden;
    border-radius: 100rem;
    img {
      position: absolute;
      object-fit: cover;
      background-position-y: bottom;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 100%;
    }
  }
  &__author {
    font-weight: 600;
    font-size: 1.6rem;
    font-family: $SSP;
  }
  &__date {
    font-weight: 600;
    font-size: 1rem;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    margin-left: auto;
    align-self: center;
  }
  &__delete,
  &__edit {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: rgba($main-dark-2, 0.05);

    span,
    svg {
      font-family: $SSP;
      font-size: 1.28rem;
      font-weight: 600;
      cursor: pointer;
    }
    .delete {
      color: red;
    }
  }
  &__delete {
    stroke: red;
    &:hover {
      background-color: rgba(red, 0.7);
      & > span {
        color: ($white);
      }
      & > svg {
        stroke: ($white);
      }
    }
  }
  &__edit {
    stroke: $main-dark-1;
    &:hover {
      background-color: $main-dark-1;
      & > span {
        color: ($white);
      }
      & > svg {
        stroke: ($white);
      }
    }
  }

  &__text {
    line-height: 1.5;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
}
</style>