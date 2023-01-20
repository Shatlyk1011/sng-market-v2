<template>
  <div class="testimonials">
    <span>100+ довольных отзывов</span>
    <div class="title">Не верьте нашим словам!</div>
    <div class="comments">
      <Comment author="Sapar" :imgUrl="imgUrls[0]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsa.
        Exercitationem inventore minima saepe voluptates iure culpa commodi
        eligendi rem!
      </Comment>
      <Comment author="Merjen" :imgUrl="imgUrls[1]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, autem
        hic? Ab, reiciendis? Deserunt, nemo.
      </Comment>
    </div>
  </div>
</template>

<script>
import Comment from "../shared/Comment-Item.vue";
export default {
  name: "Testimonials",
  components: { Comment },

  setup() {
    const imgUrls = [
      "https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
      "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    ];

    return { imgUrls };
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
.testimonials {
  margin-top: 6.4rem;
  padding: 0 12rem;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 5rem;
  span {
    font-size: 1.28rem;
    font-weight: 600;
    color: $main-light-1;
    letter-spacing: -0.6px;
  }
  .title {
    font-family: $SSP;
    font-size: 3.9rem;
    font-weight: 600;
    color: $main-dark-2;
    letter-spacing: -1px;
  }

  .comments {
    display: grid;
    max-width: 100rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.6rem;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-top: 3.2rem;
  }
}
</style>