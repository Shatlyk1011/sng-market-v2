<template>
  <div class="comments">
    <div class="container">
      <input type="text" placeholder="Напишите коментарий" />
      <Comment
        v-for="comment in formatDate"
        :key="comment.docId"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import getCollection from "@/composables/getCollection";

//форматирование времени
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
export default {
  name: "Comments",
  components: { Comment },

  setup() {
    const router = useRouter();
    const { products: comments, error } = getCollection("comments", [
      "docId",
      "==",
      router.currentRoute.value.params.id,
    ]);

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

    return { error, formatDate };
  },
};
</script>

<style lang="scss" scoped>
.comments {
  max-width: 120rem;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 6.4rem;
  border-radius: 0.6rem;

  .container {
    max-width: 80rem;
  }
}
</style>