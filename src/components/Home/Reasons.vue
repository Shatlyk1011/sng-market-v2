<template>
  <div class="reasons">
    <div class="container">
      <h2 class="title">Почему мы? Спросите вы!</h2>
      <p class="subtitle">Потому что - ответим мы! :D</p>

      <div class="grid">
        <List title="Каждый день свежий привоз">
          Перед отправкой, продукты проходять наш внутренний осмотр на свежесть
          лучшими микробиологами стран СНГ!
        </List>

        <List title="У нас работают лучшие логисты">
          Одна из наш прерогатив - это доставлять товары в назначенное
          время.Интересный факт: 19 из 20 доставок осуществляется в обговоренный
          срок вплоть до минуты!
        </List>

        <List title="Мультиязычность">
          С нами вы сможете вести общение на удобном для вас языке! Наша
          компания владеет 14+ языком(большинство из них языки стран СНГ)
        </List>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/shared/List-Item.vue";
export default {
  name: "Reasons",
  components: { List },
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
.reasons {
  margin-top: 4.8rem;
  padding: 0 6.4rem;
  .container {
    text-align: center;
    padding: 0 12rem;
    .title {
      font-size: 3.9rem;
      font-weight: 600;
      font-family: $SSP;
      color: $main-dark-2;
    }

    .subtitle {
      font-size: 1.28rem;
      letter-spacing: -1px; //??
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.6rem;
      margin-top: 3.2rem;
    }
  }
}
</style>