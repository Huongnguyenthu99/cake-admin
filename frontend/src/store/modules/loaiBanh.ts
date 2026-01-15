import { getListLoaiBanh } from "@/api/product/api";
import { ProductType } from "@/api/product/model";
import { defineStore } from "pinia";

export const useLoaiBanhStore = defineStore("loai-banh", {
  state: () => ({
    options: [],
  }),
  getters: {
    getList(state): ProductType[] {
      return state.options;
    },
  },
  actions: {
    setList(options: any) {
      this.options = options;
    },
    async fetch() {
      const res = await getListLoaiBanh();
      this.setList(res);
    },
  }
});
