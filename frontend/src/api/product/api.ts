import http from "@/utils/http";

import { ProductionBatch } from "./model";

export const getProduction = (params: ProductionBatch) => {
  return http.get("/production", { params });
};

export const getListLoaiBanh = () => {
  return http.get("/product-type");
}