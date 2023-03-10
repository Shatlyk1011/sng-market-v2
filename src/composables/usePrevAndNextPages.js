import { computed } from "vue";

const usePrevAndNextPages = (currentPage, maxPage) => {
  const previousPage = computed(() => {
    const previousPage = currentPage.value - 1;
    const firstPage = 1;
    return previousPage >= firstPage ? previousPage : null;
  });
  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1;
    return nextPage <= maxPage ? nextPage : null;
  });

  return { previousPage, nextPage };
};

export default usePrevAndNextPages;
