const useAppStore = defineStore("app", () => {
  const currencies = ref([]);

  return {
    currencies,
  };
});
