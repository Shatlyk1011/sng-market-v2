<template>
  <div :class="`search ${flexRow}`">
    <div class="input">
      <img src="../../assets/icons/search.svg" alt="" />
      <input
        type="text"
        :placeholder="placeholder"
        v-model="search"
        @input="handleInput"
      />
    </div>
    <button class="btn btn-search">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["btnText", "placeholder", "flexRow"],

  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleInput() {
      this.$emit("handleInput", this.search);
    },
  },
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
.search {
  display: flex;
  flex-direction: column;

  .input {
    background-color: $white;
    display: flex;
    padding: 1.2rem 1.8rem;
    gap: 1rem;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;

    img {
    }

    input {
      border: none;
      outline: none;
      width: 100%;

      &::placeholder {
        font-family: $roboto;
        letter-spacing: 1px;
      }
    }
  }
  .btn-search {
    text-transform: uppercase;
    padding: 1.2rem 1.8rem;
    border: none;
    outline: none;
    color: $white;
    font-size: 1.28rem;
    background-color: $main-dark-1;
    transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);

    &:hover {
      background-color: $main-dark-2;
    }
  }
}
.flexRow {
  flex-direction: row;
  .input {
    border: 1px solid $main-light-1;
    margin-right: -2px;

    &:focus {
      border: 2px solid $main-light-2;
    }
  }
}
</style>