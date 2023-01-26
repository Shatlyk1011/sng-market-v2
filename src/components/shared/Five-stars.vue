<template>
  <div class="stars">
    <svg id="stars" style="display: none" version="1.1">
      <symbol id="stars-empty-star" viewBox="0 0 102 18" fill="#F1E8CA">
        <path
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
        />
      </symbol>
      <symbol id="stars-full-star" viewBox="0 0 102 18" fill="#D3A81E">
        <path
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
        />
      </symbol>
      <symbol id="stars-half-star" viewBox="0 0 102 18" fill="#D3A81E">
        <use xlink:href="#stars-empty-star" />
        <path
          d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792"
        />
      </symbol>
    </svg>

    <!-- 0 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 0.5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 1 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 1.5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 2 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 2.5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 3 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 3.5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 4 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 4.5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating hidden">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
    </svg>

    <!-- 5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  flex-direction: column;

  & .hidden {
    display: none;
  }
}

use {
  &:nth-child(2) {
    transform: translate(20px);
  }
  &:nth-child(3) {
    transform: translate(40px);
  }
  &:nth-child(4) {
    transform: translate(60px);
  }
  &:nth-child(5) {
    transform: translate(80px);
  }
}

.rating {
  display: block;
  height: 20px;
  // margin: 0.75rem auto;
  width: 100px;
}
</style>