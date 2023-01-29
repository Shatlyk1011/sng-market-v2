<template>
  <div class="comments">
    <div class="container">
      <div class="input-container">
        <img :src="user && user.photoURL" alt="hm" />
        <textarea
          v-model.trim="commentItself"
          @keypress.prevent.enter="handleComment"
          placeholder="Добавить комментарий..."
        ></textarea>
        <button
          v-if="!isPending"
          @click="handleComment"
          class="btn comment-btn"
        >
          Опубликовать
        </button>
        <DisabledButton v-if="isPending" title="Загружаем" />
      </div>
      <Comment
        v-for="comment in formatDate"
        :key="comment.commentId"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
import DisabledButton from "../shared/DisabledButton.vue";

import router from "@/router";
import { computed, ref } from "@vue/reactivity";
import { timestamp, projectFirestore } from "@/firebase/config";

import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";
import useCollection from "@/composables/useCollection";

//форматирование времени
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";

export default {
  name: "Comments",
  components: { Comment, DisabledButton },

  setup() {
    const commentItself = ref("");
    const commentId = ref("");
    const productId = router.currentRoute.value.params.id;
    //composables
    const { user } = getUser();
    const { products: comments, error: getError } = getCollection("comments", [
      "docId",
      "==",
      productId,
    ]);
    const { addDoc, error: useError, isPending } = useCollection("comments");

    const date = new Date();
    const formatDate = computed(() => {
      if (comments.value) {
        return comments.value.map((comment) => {
          let newFormat = Number(comment.createdAt.toDate());
          let newTime = formatRelative(newFormat, date, { locale: ru });
          return { ...comment, createdAt: newTime };
        });
      }
    });
    // создать новый комментарий
    const handleComment = async () => {
      const newComment = {
        author: user.value.displayName,
        userImage: user.value.photoURL,
        title: commentItself.value,
        createdAt: timestamp(),
        docId: productId,
        commentId: "",
        likes: 0,
        likedUsers: [],
      };

      await addDoc(newComment).then((doc) => {
        if (commentItself.value !== "" && " ") {
          commentId.value = doc.id;
          console.log("commentID", doc.id);
          projectFirestore
            .collection("comments")
            .doc(commentId.value)
            .update({ commentId: commentId.value });
        }
      });
      commentItself.value = null;
    };

    return {
      useError,
      getError,
      formatDate,
      handleComment,
      commentItself,
      isPending,
      user,
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
.comments {
  max-width: 120rem;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 6.4rem;
  border-radius: 0.6rem;

  .container {
    max-width: 80rem;

    .input-container {
      width: 100%;
      background-color: $white;
      display: flex;
      align-items: start;
      gap: 1.6rem;
      padding: 2.4rem;
      img {
        border-radius: 100%;
        width: 5rem;
        height: 5rem;
        object-fit: cover;
      }
      textarea {
        padding: 1.5rem;
        flex: 1;
        border-radius: 0.8rem;
        min-height: 9.6rem;
        border: 1px solid rgba($main-dark-2, 0.1);

        &::placeholder {
          font-family: $roboto;
          font-size: 1.28rem;
        }

        &:focus {
          outline: none;
          border: 1px solid rgba($main-light-1, 0.6);
        }
      }
    }
    button {
      align-self: flex-start;
    }
    .comment-btn {
      padding: 1.2rem 2.4rem;
      font-size: 1.6rem;
      font-weight: 600;
      font-family: $SSP;
      border-radius: 0.8rem;
      background-color: $main-light-1;
      color: $white;
      display: inline-block;

      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        background-color: $main-light-2;
      }
      &:active {
        transform: translateY(4px) scale(0.97);
      }
    }
  }
}
</style>