<template>
  <div class="availability">
    <div class="available available--1" v-if="ava">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>{{ availableText }}</title>
        <path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M352 176L217.6 336 160 272"
        />
      </svg>
      <span> {{ availableText }}</span>
    </div>
    <div class="unavailable unavailable--1" v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>{{ unavailableText }}</title>
        <path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M336 256H176"
        />
      </svg>
      <span> {{ unavailableText }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Availability",
  props: ["availableText", "unavailableText"],

  setup() {
    const ava = ref(false);

    return { ava };
  },
};
</script>

<style lang="scss" scoped>
.availability {
  margin-top: 1.6rem;
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
    & svg {
      stroke: green;
    }
  }
  .unavailable--1 {
    span {
      color: #ba2d0b;
    }
    & svg {
      stroke: #ba2d0b;
    }
  }
}
</style>