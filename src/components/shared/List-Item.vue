<template>
  <div class="listItem">
    <div class="icon">{{ icon }}</div>
    <div class="title">{{ title }}</div>
    <div class="description"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["icon", "title"],
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

  .title {
    font-family: $SSP;
    font-weight: 600;
    color: $main-dark-1;
    line-height: 1.2;
    font-size: 2.5rem;
  }
  .description {
    margin-top: 2rem;
    font-weight: 500;
    font-family: $roboto;
    font-size: 1.28rem;
    line-height: 1.5;
  }
}
</style>