import http from "@/utils/http";

import { Order } from "./model";

export const createOrder = (params: Order) => {
  return http.post("/order", params);
};

export const getListOrder = (params: Partial<Order>) => {
  return http.get("/order/list", { params });
};
