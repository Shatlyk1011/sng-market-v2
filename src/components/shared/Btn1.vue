<template>
  <button class="myBtn">
    {{ title }}
    <div class="icon">
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </button>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss">
$main-light: #d9975c;
$main-dark: #455445;
$text: #181f29;

.myBtn {
  background: $main-dark;
  font-family: inherit;
  color: #fff;
  padding: 0.35rem;
  padding-left: 1.2rem;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 0.6rem;
  border: none;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6rem -0.6rem $main-dark;
  overflow: hidden;
  position: relative;
  height: 2.8rem;
  padding-right: 3.3rem;
  text-decoration: none;
}

.myBtn .icon {
  background: $main-light;
  margin-left: 1rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.6rem 0.2rem $main-dark;
  right: 0.3rem;
  transition: all 0.3s;
}

.myBtn:hover .icon {
  width: calc(100% - 0.6rem);
}

.myBtn .icon svg {
  width: 1.1rem;
  transition: transform 0.3s;
  color: $main-dark;
}
.myBtn:hover .icon svg {
  transform: translateX(0.1rem);
}

.myBtn:active .icon {
  transform: scale(0.95);
}
</style>