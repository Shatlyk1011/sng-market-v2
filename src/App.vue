<template>
  <Nav />
  <div class="App">
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: { Nav },
};
</script>

<style lang="scss">
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

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: $text;
}

html {
  font-size: 62.5%;
  line-height: 1.5;
}

body {
  font-family: $roboto;
  font-size: 1.6rem;
}

.btn {
  display: inline-block;
  text-decoration: none;
  font-size: 1.024rem;
  transition: all 0.1s;
  position: relative;
  overflow: hidden;
  z-index: 10;
  user-select: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.error {
  color: red;
  font-weight: 600;
  font-size: 1.6rem;
  margin-top: 1rem;
  font-family: $SSP;
  transition: all 0.3s ease-out;
}

.input,
input {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
</style>
