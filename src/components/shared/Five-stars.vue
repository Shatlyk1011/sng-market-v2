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
    <svg aria-hidden="true" focusable="false" class="rating" v-if="zero || def">
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 0.5 Rating -->
    <svg
      aria-hidden="true"
      focusable="false"
      class="rating"
      v-if="zeroPointFive"
    >
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 1 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating" v-if="one">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 1.5 Rating -->
    <svg
      aria-hidden="true"
      focusable="false"
      class="rating"
      v-if="onePointFive"
    >
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 2 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating" v-if="two">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 2.5 Rating -->
    <svg
      aria-hidden="true"
      focusable="false"
      class="rating"
      v-if="twoPointFive"
    >
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 3 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating" v-if="three">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 3.5 Rating -->
    <svg
      aria-hidden="true"
      focusable="false"
      class="rating"
      v-if="threePointFive"
    >
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 4 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating" v-if="four">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-empty-star" />
    </svg>

    <!-- 4.5 Rating -->
    <svg
      aria-hidden="true"
      focusable="false"
      class="rating"
      v-if="fourPointFive"
    >
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-half-star" />
    </svg>

    <!-- 5 Rating -->
    <svg aria-hidden="true" focusable="false" class="rating" v-if="five">
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
      <use xlink:href="#stars-full-star" />
    </svg>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "FiveStars",
  props: ["average"],

  setup(props) {
    const avg = props.average;

    const five = ref(false);
    const fourPointFive = ref(false);
    const four = ref(false);
    const threePointFive = ref(false);
    const three = ref(false);
    const twoPointFive = ref(false);
    const two = ref(false);
    const onePointFive = ref(false);
    const one = ref(false);
    const zeroPointFive = ref(false);
    const zero = ref(false);
    //def
    const def = ref(false);

    const averageStar = () => {
      if (avg >= 5) {
        five.value = true;
      } else if (avg <= 5 && avg > 4.5) {
        fourPointFive.value = true;
      } else if (avg <= 4.5 && avg > 4) {
        four.value = true;
      } else if (avg <= 4 && avg > 3.5) {
        threePointFive.value = true;
      } else if (avg <= 3.5 && avg > 3) {
        three.value = true;
      } else if (avg <= 3 && avg > 2.5) {
        twoPointFive.value = true;
      } else if (avg <= 2.5 && avg > 2) {
        two.value = true;
      } else if (avg <= 2 && avg > 1.5) {
        onePointFive.value = true;
      } else if (avg <= 1.5 && avg > 1) {
        one.value = true;
      } else if (avg <= 1 && avg > 0.5) {
        zeroPointFive.value = true;
      } else if (avg <= 0.5 && avg > 0) {
        zero.value = true;
      } else {
        def.value = true;
      }
    };
    onMounted(averageStar);

    return {
      averageStar,
      five,
      fourPointFive,
      four,
      threePointFive,
      three,
      twoPointFive,
      two,
      onePointFive,
      one,
      zeroPointFive,
      zero,
      def,
    };
  },
};
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  flex-direction: column;

  /*   & .hidden {
    display: none;
  } */
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