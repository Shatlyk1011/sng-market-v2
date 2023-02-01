<template>
  <button
    :class="`btn disabled disabled__btn ${
      smallerBorder ? 'smallerBorder' : ''
    } `"
    v-if="!isPending"
    disabled
  >
    <span :class="`curtom-loader ${smallerSpin ? 'smallerSpin' : ''}`"></span>
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "DisabledButton",
  props: ["title", "smallerSpin", "smallerBorder"],
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
.disabled {
  align-self: center;
  background: rgba($main-dark-2, 0.25);
  cursor: not-allowed;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  span {
    color: $white;
  }
  .curtom-loader {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #fff);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 4px),
      #000 0
    );
    animation: s3 1s infinite linear;
  }

  .smallerSpin {
    width: 1.2rem;
    height: 1.2rem;
  }

  @keyframes s3 {
    to {
      transform: rotate(360deg);
    }
  }

  &__btn {
    padding: 1rem 1.4rem;
    border-radius: 1rem;
    color: $white;
    box-shadow: 0 1rem 2rem rgba($main-dark-2, 0.05);
    font-size: 1.6rem;
    font-family: $SSP;
    line-height: 1;
    &.smallerBorder {
      border-radius: 2px;
    }
  }
}
</style>