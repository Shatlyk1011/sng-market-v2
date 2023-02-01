<template>
  <div class="reasons">
    <div class="container">
      <h2 class="title">Почему мы? Спросите вы!</h2>

      <div class="grid">
        <List title="Каждый день свежий привоз">
          Перед отправкой, продукты проходять наш внутренний осмотр на свежесть
          лучшими микробиологами стран СНГ!
        </List>

        <List title="У нас лучшие логисты">
          Одна из наш прерогатив - это доставлять товары в назначенное
          время.Интересный факт: 19 из 20 доставок осуществляется в обговоренный
          срок вплоть до минуты!
        </List>

        <List :actionClass="actionClass" class="lastItem" :title="action">
          С нами вы сможете вести общение на удобном для вас языке! Наша
          компания владеет 14+ языком(большинство из них языки стран СНГ)
        </List>
      </div>
      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, computed } from "@vue/runtime-core";
import List from "@/components/shared/List-Item.vue";
export default {
  name: "Reasons",
  components: { List },

  setup() {
    const action = ref("Мультиязычность");
    const interval = ref(null);

    const actionClass = computed(() => {
      switch (action.value) {
        case "Multilingual":
          return "color-1";
        case "Көптілді":
          return "color-2";
        case "Мультимовність":
          return "color-3";
        case "Мультиязычность":
          return "color-4";
      }
    });

    console.log(actionClass.value);

    const changeTitle = () => {
      interval.value = setInterval(() => {
        const actions = [
          "Multilingual",
          "Көптілді",
          "Мультимовність",
          "Мультиязычность",
        ];
        const currentActionIndex = actions.indexOf(action.value);
        const nextActionIndex = (currentActionIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        console.log(currentActionIndex);
        action.value = nextAction;
      }, 2000);
    };

    onMounted(() => changeTitle());
    onBeforeUnmount(() => clearInterval(interval.value));

    return { action, actionClass };
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

.reasons {
  position: relative;
  .container {
    text-align: center;
    padding: 9.6rem 6.4rem;
    z-index: 10;
    opacity: 1;
    @media (max-width: 68em) {
      padding: 4.8rem;
    }
    @media (max-width: 56em) {
      padding: 4.8rem 3.2rem;
    }
    @media (max-width: 47em) {
      padding: 3.2rem 1.6rem;
    }
    .title {
      font-size: 4.8rem;
      font-weight: 600;
      font-family: $SSP;
      color: $main-light-1;
      line-height: 1.2;
      @media (max-width: 47em) {
        font-size: 3.9rem;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.6rem;
      margin-top: 3.2rem;
      @media (max-width: 47em) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 2.4rem;
        gap: 2.4rem;
      }

      .lastItem {
        @media (max-width: 47em) {
          grid-column: 1 / span 2;
          justify-self: center;
          max-width: 50%;
        }
      }
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #ffffff;
    opacity: 0.05;
    background: repeating-linear-gradient(
      -45deg,
      $main-dark-2,
      $main-dark-2 8px,
      #ffffff 8px,
      #ffffff 40px
    );
    z-index: -1;
  }
}
</style>