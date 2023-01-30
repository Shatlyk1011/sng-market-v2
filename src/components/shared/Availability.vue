<template>
  <div class="availability">
    <div class="available available--1" v-if="product">
      <ion-icon class="icon" name="checkmark-done-outline"></ion-icon>
      <span> {{ availableText }}</span>
    </div>
    <div class="unavailable unavailable--1" v-if="!product">
      <ion-icon class="icon" name="remove-circle-outline"></ion-icon>
      <span> {{ unavailableText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Availability",
  props: ["availableText", "unavailableText", "product"],

  setup() {},
};
</script>

<style lang="scss" scoped>
.availability {
  margin-top: 1.6rem;

  .icon {
    height: 1.8rem;
    width: 1.8rem;
  }
  .available,
  .unavailable {
    display: flex;
    gap: 1rem;
    align-items: center;
    span {
      letter-spacing: -0.3px;
    }
  }
  .available--1 {
    span {
      color: green;
    }
    .icon {
      color: green;
    }
  }
  .unavailable--1 {
    span {
      color: #ba2d0b;
    }
    .icon {
      color: #ba2d0b;
    }
  }
}
</style>