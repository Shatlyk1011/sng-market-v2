<template>
  <div class="c">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
};
</script>

<style lang="scss" scoped>
$main-light-1: #d9975c;
$main-light-2: #ab825f;
$main-dark-1: #455445;
$main-dark-2: #1e281e;
$text: #181f29;
$white: #fff;

.c {
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 7.2rem;
    height: 7.2rem;
    margin: auto;
    position: relative;

    &:before {
      content: "";
      width: 7.2rem;
      height: 5px;
      background: $main-light-1;
      position: absolute;
      top: 8.8rem;
      left: 0;
      border-radius: 50%;
      animation: shadow324 0.5s linear infinite;
    }
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      background: $main-light-2;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
      animation: jump7456 0.5s linear infinite;
    }
  }

  @keyframes jump7456 {
    15% {
      border-bottom-right-radius: 3px;
    }

    25% {
      transform: translateY(9px) rotate(22.5deg);
    }

    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      transform: translateY(9px) rotate(67.5deg);
    }

    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow324 {
    0%,
    100% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.2, 1);
    }
  }
}
</style>