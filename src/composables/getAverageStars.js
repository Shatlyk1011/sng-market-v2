import { ref } from "vue";

const getAverageStars = (stars) => {
  let average = ref(0);
  const length = stars ? stars.length : 0;
  if (stars) {
    stars.map((s) => {
      if (typeof s === "string") {
        const conv = parseFloat(s);
        return (average.value += conv);
      }
      return (average.value += s);
    });
    average.value /= stars.length;
  }

  return { average, length };
};

export default getAverageStars;
