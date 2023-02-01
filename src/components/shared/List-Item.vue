<template>
  <div class="listItem">
    <div class="icon">{{ icon }}</div>
    <div :class="`title ${actionClass}`">{{ title }}</div>
    <div class="description"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["icon", "title", "actionClass"],
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

.listItem {
  padding: 0 1rem;
  @media (max-width: 47em) {
    padding: 0;
  }

  .title {
    font-family: $SSP;
    font-weight: 600;
    color: $main-dark-1;
    line-height: 1.2;
    font-size: 2.5rem;
  }
  .color-1 {
    color: $main-dark-1;
  }
  .color-2 {
    color: $main-light-1;
  }
  .color-3 {
    color: $main-dark-2;
  }

  .color-4 {
    color: $main-light-2;
  }
  .description {
    margin-top: 2rem;
    font-weight: 500;
    font-family: $roboto;
    font-size: 1.28rem;
    line-height: 1.5;
    @media (max-width: 47em) {
      margin-top: 1rem;
    }
  }
}
</style>