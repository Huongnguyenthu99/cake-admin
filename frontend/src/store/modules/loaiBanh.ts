import { defineStore } from "pinia";

export const useLoaiBanhStore = defineStore("loai-banh", {
  state: () => ({
    options: [],
  }),
  getters: {
    getList(state) {
      return state.options;
    },
  },
});
