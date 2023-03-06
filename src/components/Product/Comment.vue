<template>
  <div class="comment">
    <div class="comment__likes colorRed" ref="commentLikes">
      <ion-icon
        @click="handleLike(comment.likes, comment.likedUsers)"
        class="comment__icon"
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
          <div
            v-if="comment.authorUid === user.uid"
            class="comment__delete"
            @click="handleDelete(comment.commentId)"
          >
            <ion-icon
              class="comment__icon delete"
              name="trash-outline"
            ></ion-icon>
            <span class="delete">Удалить</span>
          </div>
          <div
            v-if="comment.authorUid === user.uid"
            class="comment__edit"
            @click="change = !change"
          >
            <ion-icon
              class="comment-icon edit"
              name="pencil-outline"
            ></ion-icon>
            <span>Изменить</span>
          </div>
        </div>
      </div>

      <div class="comment__text" v-if="!change">
        {{ comment.title }}
      </div>
      <div v-if="error">{{ error }}</div>
      <div class="comment__change comment__text" v-if="change">
        <textarea type="text" v-model.trim="title" />
        <button v-if="!isPending" class="btn" @click="handleUpdate">
          Сохранить
        </button>
        <DisabledButton
          v-if="isPending"
          title="Сохраняем"
          smallerSpin="smallerSpin"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DisabledButton from "../shared/DisabledButton.vue";

import getUser from "@/composables/getUser";
import useDocument from "@/composables/useDocument";

import { computed, ref, watchEffect } from "vue";
import router from "@/router";

export default {
  name: "Comment",
  props: ["comment"],
  components: { DisabledButton },

  setup(props) {
    const checkedLike = ref(null);
    const newComment = ref(null);
    const title = ref(null);
    const change = ref(false);
    const commentLikes = ref(null);
    const productId = router.currentRoute.value.params.id;

    //composables
    const { user } = getUser();
    const { updateDoc, deleteDoc, error, isPending } = useDocument(
      "comments",
      props.comment.commentId
    );

    const handleLike = async (currentLikes, likedUsers) => {
      const checkLike = likedUsers.find(
        (like) => like.userLikeId === user.value.uid
      );
      if (!checkLike || !likedUsers.length) {
        //добавить лайк
        await updateDoc({
          likedUsers: [...likedUsers, { userLikeId: user.value.uid }],
          likes: currentLikes + 1,
        });
        //убрать лайк
      } else if (checkLike) {
        const removeUserId = likedUsers.filter(
          (like) => like.userLikeId != user.value.uid
        );
        await updateDoc({
          likedUsers: [...removeUserId],
          likes: currentLikes - 1,
        });
      }
    };

    //изменить комментарий
    const handleUpdate = async () => {
      if (title.value.length !== 0)
        await updateDoc({
          title: title.value,
        });
      change.value = false;
    };
    // удалить комментарий
    const handleDelete = (commentId) => {
      deleteDoc(commentId);
    };

    const owner = computed(() => {
      return user.value && user.value.uid == props.comment.docId;
    });

    const checkLikedUsers = computed(() => {
      if (commentLikes.value) {
        props.comment.likedUsers.find((userId) => {
          if (userId.userLikeId === user.value.uid) {
            commentLikes.value.classList.add("colorRed");
          } else {
            commentLikes.value.classList.remove("colorRed");
          }
        });
      }
    });

    watchEffect(checkLikedUsers);

    // подставить имеющиеся значения
    watchEffect(() => (title.value = props.comment.title));

    return {
      handleLike,
      checkedLike,
      error,
      handleDelete,
      isPending,
      newComment,
      title,
      handleUpdate,
      change,
      commentLikes,
      owner,
      user,
      productId,
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
    user-select: none;

    span {
      color: $main-light-1;
      font-weight: 600;
    }

    .comment__icon {
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

    &.colorRed {
      .comment__icon {
        color: red;
      }
    }
  }

  /*   &__likes.colorRed {
    .comment__icon {
      color: red;
    }
  } */

  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__title {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    @media (max-width: 31em) {
      flex-direction: column;
      gap: 4px;
      align-items: flex-start;
    }
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
    line-height: 1;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    margin-left: auto;
    align-self: center;
    @media (max-width: 31em) {
      flex-direction: column;
    }
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
    @media (max-width: 31em) {
      border-top: 1px solid rgba($main-dark-1, 0.2);
      border-radius: 3px;
      padding: 4px 6px;
      line-height: 1.3;
      font-size: 1.6rem;
    }
  }
  &__change {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    textarea {
      border: 1px solid rgba($main-light-1, 0.4);
      padding: 1rem 1.5rem;
      border-radius: 0.6rem;
      resize: none;
      width: 100%;
      max-height: 30%;

      &:focus {
        outline: none;
        border: 1px solid rgba($main-light-1, 0.8);
        border-radius: 0.4rem;
        box-shadow: 0 2rem 4rem rgba(#000, 0.03);
      }
    }

    button {
      align-self: flex-start;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      color: $white;
      background-color: $main-dark-1;
      border-radius: 0.2rem;

      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        background-color: $main-dark-2;
      }
      &:active {
        transform: translateY(2px) scale(0.98);
        box-shadow: 0 2rem 4rem rgba(#000, 0.03);
      }
    }
  }
}
</style>