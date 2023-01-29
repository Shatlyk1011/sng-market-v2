<template>
  <div class="comment">
    <div class="comment__likes">
      <ion-icon
        @click="handleLike(comment.likes, comment.likedUsers)"
        :class="`comment__icon ${checkLikes ? 'comment__icon--red' : ''}`"
        name="heart"
      ></ion-icon>
      <span title="Количество лайков">{{ comment.likes }}</span>
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
            <ion-icon
              class="comment__icon delete"
              name="trash-outline"
            ></ion-icon>
            <span class="delete">Удалить</span>
          </div>
          <div class="comment__edit">
            <ion-icon
              class="comment-icon edit"
              name="pencil-outline"
            ></ion-icon>
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
import getUser from "@/composables/getUser";
import useDocument from "@/composables/useDocument";

import { ref } from "vue";

export default {
  name: "Comment",
  props: ["comment"],

  setup(props) {
    const checkedLike = ref(null);

    //composables
    const { user } = getUser();
    const { updateDoc } = useDocument("comments", props.comment.commentId);

    const handleLike = async (currentLikes, likedUsers) => {
      const checkLike = likedUsers.find(
        (like) => like.userLikeId === user.value.uid
      );
      if (!checkLike || !likedUsers.length) {
        await updateDoc({
          likedUsers: [...likedUsers, { userLikeId: user.value.uid }],

          likes: currentLikes + 1,
        });
      } else if (checkLike) {
        const removeUserId = likedUsers.filter(
          (like) => like.userLikeId != user.value.uid
        );
        console.log("removeUserId", removeUserId);
        await updateDoc({
          likedUsers: [...removeUserId],
          likes: currentLikes - 1,
        });
      }
    };

    return { handleLike, checkedLike };
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

.comment {
  padding: 2.4rem;

  display: flex;
  gap: 2.4rem;

  &__icon {
    width: 1.4rem;
    height: 1.4rem;
    color: $main-dark-2;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: red;
    }
    &:active {
      transform: translateY(3px) scale(0.9);
    }

    &--red {
      color: red;
    }
  }

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
    user-select: none;

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
    cursor: pointer;

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    span {
      font-family: $SSP;
      font-size: 1.28rem;
      font-weight: 600;
    }
  }
  &__delete {
    color: red;

    &:hover {
      background-color: rgba(red, 0.7);
      & > span {
        color: $white;
      }
      & > .delete {
        color: $white;
      }
    }
    .delete {
      color: red;
    }
  }
  &__edit {
    color: $main-dark-1;
    &:hover {
      background-color: $main-dark-1;
      & > span {
        color: ($white);
      }
      & > .edit {
        color: ($white);
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