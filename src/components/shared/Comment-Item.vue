<template>
  <div class="comment">
    <!-- <div class="comment__image"> -->
    <img class="comment__image" :src="imgUrl" alt="" />
    <!-- </div> -->
    <div class="comment__description">
      <div class="comment__stars">
        <img src="../../assets/icons/star.svg" alt="" />
        <img src="../../assets/icons/star.svg" alt="" />
        <img src="../../assets/icons/star.svg" alt="" />
        <img src="../../assets/icons/star.svg" alt="" />
        <img src="../../assets/icons/star.svg" alt="" />
      </div>
      <div class="comment__text">
        <slot />
      </div>
      <div class="comment__author">
        Автор: <span>{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["author", "imgUrl"],
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
.comment {
  // display: grid;
  // grid-template-columns: 18rem 1fr;
  display: flex;
  gap: 1.8rem;
  &__image {
    width: 40%;
    // height: 60%;
    border-radius: 10px;
    object-fit: cover;
  }

  &__description {
    line-height: 1.4;
    text-align: left;
  }

  &__stars {
    display: flex;
    gap: 0.4rem;
    height: 1rem;

    img {
      width: 14px;
      height: 14px;
    }
  }

  &__text {
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 2.4rem;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: "";
  }
  &__author {
    display: block;
    margin-top: auto;

    span {
      font-weight: 700;
      border-bottom: 1px solid $main-dark-2;
      cursor: pointer;
    }
  }
}
</style>