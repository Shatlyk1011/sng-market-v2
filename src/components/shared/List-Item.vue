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
/* 
  BORDER-RADIUS
  0.8rem, .
  1rem,
  1.6rem,
 */

/* 
  TRANSITION
  transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
 */

.listItem {
  padding: 0 1rem;
  .icon {
  }
  .title {
    font-family: $SSP;
    font-weight: 600;
    line-height: 1.4;
    color: $main-dark-2;
  }
  .description {
    margin-top: 1.6rem;
    font-family: $roboto;
    font-size: 1.28rem;
    line-height: 1.5;
  }
}
</style>