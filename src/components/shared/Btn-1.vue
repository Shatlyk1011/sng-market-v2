<template>
  <button class="myBtn">
    {{ title }}
    <div class="icon">
      <ion-icon class="search-icon" name="arrow-forward-outline"></ion-icon>
    </div>
  </button>
</template>

<script>
export default {
  name: "Btn-1",

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

.myBtn .icon .search-icon {
  width: 1.1rem;
  transition: transform 0.3s;
  color: $main-dark;
}
.myBtn:hover .icon .search-icon {
  transform: translateX(0.1rem);
}

.myBtn:active .icon {
  transform: scale(0.95);
}
</style>